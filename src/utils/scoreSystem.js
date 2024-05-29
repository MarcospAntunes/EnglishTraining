import changeWord from "./changeWord.js";

const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
const portugueseWord = document.querySelector("#insertWord");
import db from '../db.json' assert { type: 'json' };

function scoreSystem({ valuesAlreadySeen, currentWord, number, response }) {
  const wordsArr = Object.keys(db);
  
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
