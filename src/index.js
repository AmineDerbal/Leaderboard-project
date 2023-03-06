import './styles/style.css';
import { getGameId, submitNewScore, getAllScores } from './modules/Leaderboard.js';
import UserInterface from './modules/UserInterface.js';

const submitButton = document.getElementById('submit');
const refreshButton = document.getElementById('refresh');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
let gameId = '';
let ui = '';

window.onload = async () => {
  gameId = await getGameId();
  ui = new UserInterface();
};

refreshButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const scores = await getAllScores(await gameId);
  ui.renderScores(await scores.result);
});
submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  if (nameInput.value === '' || scoreInput.value === '') {
    return;
  }

  await submitNewScore(await gameId, nameInput.value, scoreInput.value);
  ui.clearInputs();
});
