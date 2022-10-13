const getScores = async (scores) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hjQ1d7tYqYfYNIn76Anu/scores/');
  const json = await response.json();
  scores.innerHTML = '';
  const stortedScores = json.result.sort((a, b) => b.score - a.score);
  stortedScores.forEach((element) => {
    if (json.result.length > 0) {
      const emoji = element.score > 50 ? "😁" : "😢";
      scores.innerHTML += `<li>${emoji} ${element.user}: ${element.score}</li>`;
    } else {
      scores.innerHTML = 'No scores yet';
    }
  });
};

export default getScores;