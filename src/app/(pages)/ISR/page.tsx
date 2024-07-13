import { Character } from "@/app/models/custom-types";
import Image from "next/image";

//! Component Base re-rendering after 5 Sec
// export const revalidate = 5

const isrPage = async () => {
  const randomId = Math.floor(Math.random() * 800);
  console.log("Random ", randomId);

  //! only effect re-render in fetch function after 5 sec
  const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`, { next: { revalidate: 5 } });

  //! this will re-render the fetch in every request (0-second)
  // const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`,{ cache: "no-cache" });

  const result: Character = await response.json();

  return (
    <div>
      <p>This page is already rendered into server, at build time.but every 5 second the server will re re-render this page and the content will change</p>
      <hr />
      <h2>Name: {result.name}</h2>
      <Image src={result.image} alt={result.name} width={200} height={200} />
    </div>
  );
};

export default isrPage;
