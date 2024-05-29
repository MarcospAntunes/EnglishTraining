import db from './db.json' assert { type: 'json' };
import { scoreSystem } from './utils/index.js';

const englishWordInput = document.querySelector("#englishWord");
const portugueseWord = document.querySelector("#insertWord");
const form = document.querySelector("form");
const mensage = document.querySelector(".mensage");

let number = Math.floor(Math.random() * (Object.keys(db).length));
const valuesAlreadySeen = [];

const wordsArr = Object.keys(db);
let currentWord = wordsArr[number];
portugueseWord.textContent = currentWord;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const response = englishWordInput.value;

  if(response === "") {
    mensage.textContent = `Preencha o campo antes de enviar!`
    return
  }

  number = scoreSystem({ valuesAlreadySeen, currentWord, number, response });

  englishWordInput.value = "";
})


