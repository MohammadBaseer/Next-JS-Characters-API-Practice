"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const SingleCharacterPage = () => {
    const {characterName} = useParams()
    console.log("params", characterName)
  return (
    <div>
      <p>This is <strong>CSR Client Side Component</strong>. it is Render by the browser when the url we visit the url</p>

      <h3>This is: {characterName}</h3>
    </div>
  )
}

export default SingleCharacterPage
