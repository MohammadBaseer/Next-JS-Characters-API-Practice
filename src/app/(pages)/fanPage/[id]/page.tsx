import { Character } from "@/app/models/custom-types";
import Image from "next/image";

type DynamicURLProps = {
  params: {
    id: string;
  };
};

//!
export const dynamicParams = false;

export async function generateStaticParams() {
  const arrayOfId = ["1", "2", "3"];
  return arrayOfId.map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params: { id } }: DynamicURLProps) {
  return {
    title: "ID- " + id,
    keywords: { Fun: "Cartoons" },
  };
}

//! This is a params receiving any ID's
const singleCharacter = async ({ params: { id } }: DynamicURLProps) => {
  console.log("ID::", id);

  //! Fetch ByID (The Id is coming from Prams)
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const result: Character = await response.json();

  return (
    <div>
      <p>
        This page one of the pages generate at build time on the server, because the final segment of the url included in the array of <strong>Static Params &apos;(generateStaticParams())&apos;</strong> if you also add <strong>dynamicParams = false </strong>, when you visit other url inside / fanPage other than the 3 contained in the array it won&apos;t display a page.
      </p>
      <hr />
      <h2>Name: {result.name}</h2>
      <Image src={result.image} alt={result.name} width={200} height={200} />
    </div>
  );
};

export default singleCharacter;
