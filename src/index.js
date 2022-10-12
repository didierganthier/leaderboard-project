// import createGame from '../modules/createGame';
import addScore from '../modules/addScore.js';
import getScores from '../modules/getScores.js';
import './style.css';

const scoresList = document.querySelector('.scores-list');
const submitButton = document.querySelector('.submit-button');
const refreshButton = document.querySelector('.refresh');
const message = document.querySelector('.message');

// createGame('Cool Game');

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  getScores(scoresList);
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const user = document.querySelector('.user').value;
  const score = document.querySelector('.score').value;
  addScore(scoresList, user, score, message);
});
