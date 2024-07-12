"use client";
import styles from "./Characters.module.scss"
import { ApiResponse, Character } from "@/app/models/custom-types";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  // console.log(" Testing from Frontend");
  // await new Promise((resolved) => {
  //   return setTimeout(resolved, 3000);
  // });

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const result = (await response.json()) as ApiResponse;
    setCharacters(result.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  // throw new Error("This is an Error");

  return (
    // <div>
    //   <h1>this is Characters Page </h1>
    //   {characters &&
    //     characters.map((character) => {
    //       return (
    //         <div key={character.id}>
    //           <img src={character.image} alt={character.name} />
    //           <p>{character.name}</p>
    //         </div>
    //       );
    //     })}
    // </div>

    <div className={styles.item_box}>
      {characters &&
        characters.map((character) => {
          return (
            <div className={styles.item} key={character.id}>
              <div className={styles.card_inner}>
                <div className={styles.card_front}>
                  <img className={styles.item_image} src={character.image} alt="Photo" />
                </div>
                <div className={styles.card_back}>
                  <h1>{character.name}</h1>
                  <button className={styles.more_btn}>Details</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Characters;
