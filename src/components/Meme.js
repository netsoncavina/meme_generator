import memesData from "../memesData";
import React, { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/gk5el.jpg",
  });

  const [allMemeImage, setAllMemeImage] = useState(memesData);
  function getMemeImage() {
    setMeme({
      ...meme,
      randomImg:
        allMemeImage.data.memes[
          Math.floor(Math.random() * allMemeImage.data.memes.length)
        ].url,
    });
  }

  return (
    <main>
      <div className="form">
        <input
          id="top"
          className="form--input"
          type="text"
          placeholder="Top text"
        />
        <input className="form--input" type="text" placeholder="Bottom Text" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme--image" src={meme.randomImg}></img>
    </main>
  );
}
