const mensage = document.querySelector(".mensage");
const portugueseWord = document.querySelector("#insertWord");
import db from '../db.json' assert { type: 'json' };

function changeWord({ valuesAlreadySeen,  number, currentWord }) {
  const wordsArr = Object.keys(db);
  if(valuesAlreadySeen.length < Object.keys(db).length) {
    while(valuesAlreadySeen.includes(currentWord)) {
      if(!valuesAlreadySeen.includes(currentWord)) break;
      number = Math.floor(Math.random() * (Object.keys(db).length));
      currentWord = wordsArr[number];
      portugueseWord.textContent = currentWord;
    }
  } else {
    mensage.textContent = `Parabéns, você fez praticou todas as palavras.`
    document.querySelector("#submit").disabled = true;
  }

  return number;
}

export default changeWord;
