import memesData from "../memesData";
import React, { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/gk5el.jpg");
  let url;
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomIndex].url;
    setMemeImage(url);
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top text" />
        <input className="form--input" type="text" placeholder="Bottom Text" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme--image" src={memeImage}></img>
    </main>
  );
}
