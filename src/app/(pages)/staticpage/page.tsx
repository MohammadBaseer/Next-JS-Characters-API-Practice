import { Character } from "@/app/models/custom-types";
import Image from "next/image";

const StaticPage = async () => {
  const randomId = Math.floor(Math.random() * 800);
  console.log("Random ", randomId);

  const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
  const result: Character = await response.json();

  return (
    <div>
      <p>This page is already rendered into server nad served to the browser when we navigate to it. every time you reload the page (in deployed version) you will get the same context</p>
      <hr />
      <h2>Name: {result.name}</h2>
      {/* <img src={result.image} alt={result.name} />
       */}
      <Image src={result.image} alt={result.name} width={200} height={200} />
    </div>
  );
};

export default StaticPage;
