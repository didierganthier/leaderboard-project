import getScores from './getScores.js';
import showMessage from './showMessage.js';

const addScore = async (scores, user, score, message) => {
  if (user === '' || score === '') {
    showMessage(message, 'success', 'error', 'Please fill in all fields');
  } else {
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
    if (response.ok) {
      getScores(scores);
    } else {
      showMessage(message, 'success', 'error', 'Something went wrong');
    }
    document.querySelector('.user').value = '';
    document.querySelector('.score').value = '';

    const json = await response.json();
    showMessage(message, 'error', 'success', json.result);
  }
};

export default addScore;