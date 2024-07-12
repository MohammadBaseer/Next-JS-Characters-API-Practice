import {  Character } from "@/app/models/custom-types";

const StaticPage = async () => {
const randomId = Math.floor(Math.random() * 800)
console.log("Random ", randomId)

const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
const result:Character = await response.json();

  return (
    <div>
        <h2>This page is already rendered into server nad served to the browser when we navigate to it. every time you reload the page (in deployed version) you will get the same context</h2>
        <hr />
        <h2>Name: {result.name}</h2>
      <img src={result.image} alt={result.name} />
    </div>
  )
}

export default StaticPage
