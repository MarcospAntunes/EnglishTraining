import changeWord from "./changeWord.js";
import db from '../db.json' assert { type: 'json' };

function scoreSystem({ valuesAlreadySeen, number, response }) {
  const wordsArr = Object.keys(db);

  const correct = document.querySelector("#correct");
  const wrong = document.querySelector("#wrong");
  const portugueseWord = document.querySelector("#insertWord");

  let currentWord = wordsArr[number];
  portugueseWord.textContent = currentWord;
  
  if(valuesAlreadySeen.includes(currentWord)) {
    number = Math.floor(Math.random() * (Object.keys(db).length));
    currentWord = wordsArr[number];
    portugueseWord.textContent = currentWord;
  } else {
    valuesAlreadySeen.push(currentWord);

    if(db[currentWord] === response) {
      correct.textContent = Number(correct.textContent) + 1;
      
    } else {
      wrong.textContent = Number(wrong.textContent) + 1;
    }

    number = changeWord({ valuesAlreadySeen, number, currentWord })
  }
  return number;
}

export default scoreSystem;
