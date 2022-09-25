import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😄": "Smile",
  "😆": "Laughing",
  "😑": "Expressionless",
  "🤔": "Thinking face",
  "😏": "Smirk",
  "🤯": "Exploding head",
  "👻": "Ghost",
  "👽": "Alien",
  "👀": "Eyes",
  "🤖": "Robot",
  "❤️": "Red Heart",
  "✨": "Sparkles"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    //processing
    var inputEmoji = event.target.value;
    var meaning = emojiDictionary[inputEmoji];
    // console.log(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else setMeaning("We dont have this emoji in our database"); //react call to show output
  }
  function emojiClickHandler(inputEmoji) {
    //processing
    setMeaning(emojiDictionary[inputEmoji]); //react call to show output
  }
  return (
    <div className="App">
      <h1>EMOJINIZER</h1>
      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: ".5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
