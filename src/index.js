import './styles/style.css';
import LeaderboardImageSrc from './assets/leader.png';
import githubImageSrc from './assets/git-github-hub-icon-25.png';
import { getGameId, submitNewScore, getAllScores } from './modules/Leaderboard.js';
import UserInterface from './modules/UserInterface.js';

const submitButton = document.getElementById('submit');
const refreshButton = document.getElementById('refresh');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
let gameId = '';
let ui = '';

const loadPageImages = () => {
  const boardImage = new Image();
  boardImage.src = LeaderboardImageSrc;
  boardImage.alt = 'leaderBoard image';
  document.getElementById('leader-img-container').appendChild(boardImage);

  const githubImage = new Image();
  githubImage.src = githubImageSrc;
  githubImage.alt = 'github image';
  githubImage.className = 'rotate-icon';
  document.getElementById('github-link').appendChild(githubImage);
};

window.onload = async () => {
  loadPageImages();
  gameId = await getGameId();
  ui = new UserInterface();
};

refreshButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const scores = await getAllScores(gameId);
  ui.renderScores(await scores.result);
});
submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  if (nameInput.value === '' || scoreInput.value === '') {
    return;
  }

  await submitNewScore(gameId, nameInput.value, scoreInput.value);
  ui.clearInputs();
});
