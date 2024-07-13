import { Character } from "@/app/models/custom-types";
import Image from "next/image";
import { useRouter } from "next/router";

type DynamicURLProps = {
  params: {
    id: string;
  };
};

//! This is a params receiving any ID's
const singleCharacter = async ({ params: { id } }: DynamicURLProps) => {
  console.log("ID::", id);

  //! Fetch ByID (The Id is coming from Prams)
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const result: Character = await response.json();

  return (
    <div>
      <p>This page rendered by ID of Character , Which ID is coming from Params</p>
      <hr />
      <h2>Name: {result.name}</h2>
      {/* <img src={result.image} alt={result.name} />
       */}
      <Image src={result.image} alt={result.name} width={200} height={200} />
    </div>
  );
};

export default singleCharacter;
