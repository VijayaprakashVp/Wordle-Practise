import React, { useState } from "react";
import "../App.css";

export const Wordle = () => {
  const [spell, setSpell] = useState({});
  let word = "metal";
  var color;

  var green = "green";
  var yellow = "yellow";
  var grey = "grey";

  const handleChange = (e) => {
    setSpell({ ...spell, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let str = "";
    str += spell._1 + spell._2 + spell._3 + spell._4 + spell._5;

    for (let i = 0; i < word.length; i++) {
      color = "empty";
      if (str[i] == word[i]) {
        // color: green;
        console.log("Correct");
      } else {
        let flag = 0;
        for (let j = 0; j < word.length; j++) {
          if (str[i] == word[j]) {
            // color = "yellow";
            console.log("Correct but in wrong place");
            flag = 1;
          }
        }
        if (flag == 0) {
          // color = grey;
          console.log("Wrong Input");
        }
      }
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          minLength={1}
          maxLength={1}
          name="_1"
          value={spell._1}
          onChange={(e) => handleChange(e)}
          style={{ backgroundColor: `${color}` }}
        />
        <input
          type="text"
          minLength={1}
          maxLength={1}
          name="_2"
          value={spell._2}
          onChange={(e) => handleChange(e)}
          style={{ backgroundColor: `${color}` }}
        />
        <input
          type="text"
          minLength={1}
          maxLength={1}
          name="_3"
          value={spell._3}
          onChange={(e) => handleChange(e)}
          style={{ backgroundColor: `${color}` }}
        />
        <input
          type="text"
          minLength={1}
          maxLength={1}
          name="_4"
          value={spell._4}
          onChange={(e) => handleChange(e)}
          style={{ backgroundColor: `${color}` }}
        />
        <input
          type="text"
          minLength={1}
          maxLength={1}
          name="_5"
          value={spell._5}
          onChange={(e) => handleChange(e)}
          style={{ backgroundColor: `${color}` }}
        />
        <br />
      </div>
      <button
        disabled={!spell._1 || !spell._2 || !spell._3 || !spell._4 || !spell._5}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
