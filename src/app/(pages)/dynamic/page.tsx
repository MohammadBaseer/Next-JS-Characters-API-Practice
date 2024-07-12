import {  Character } from "@/app/models/custom-types";
import Image from "next/image";

//! Component Base re-rendering after 5 Sec
// export const revalidate = 5

const dynamicPage = async () => {
const randomId = Math.floor(Math.random() * 800)
console.log("Random ", randomId)

//! only effect re-render in fetch function after 5 sec
const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`,{next: {revalidate: 0}});

//! this will re-render the fetch in every request (0-second)
// const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`,{ cache: "no-cache" });

const result:Character = await response.json();

  return (
    <div>
        <h2><strong>Server Side Rendering</strong>. This is page is <strong>Dynamically</strong> generate on the <strong>Server</strong> ans save to the browser, every time we navigate or refresh the page. </h2>
        <hr />
        <h2>Name: {result.name}</h2>
<Image src={result.image} alt={result.name} width={200} height={200} />

    </div>
  )
}

export default dynamicPage
