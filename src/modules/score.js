const scoresValue = [
  {
    value: 100,
  },
  {
    value: 20,
  },
  {
    value: 50,
  },
  {
    value: 78,
  },
  {
    value: 125,
  },
  {
    value: 77,
  },
  {
    value: 42,
  },
];

export const getScoresValue = () => {
  const scoreContainer = document.getElementById('score-data');
  scoresValue.forEach((score) => {
    const scoreElement = document.createElement('p');
    scoreElement.textContent = `Name: ${score.value}`;
    scoreContainer.appendChild(scoreElement);
  });
};

export default getScoresValue;
