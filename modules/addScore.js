import getScores from './getScores.js';

const addScore = async (scores, user, score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hjQ1d7tYqYfYNIn76Anu/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const json = await response.json();
  console.log(json);
  getScores(scores);
};

export default addScore;