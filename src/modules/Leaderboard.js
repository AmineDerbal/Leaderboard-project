const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameName = 'new game plus';

const gameOptions = {
  method: 'POST',
  headers: {
    'content-Type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    name: gameName,
  }),
};

export const getGameId = async () => {
  const dataStream = await fetch(url, gameOptions);

  const dataResponse = await dataStream.json();
  const gameId = await dataResponse.result.split(' ')[3];

  return gameId;
};

export const getAllScores = async (id) => {
  const dataStream = await fetch(`${url}${id}/scores/`);
  const dataResponse = await dataStream.json();
  return dataResponse;
};

export const submitNewScore = async (id, user, score) => {
  const gameOptions = {
    method: 'POST',
    headers: {
      'content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  };

  const dataStream = await fetch(`${url}${id}/scores/`, gameOptions);
  const dataResponse = await dataStream.json();

  return dataResponse;
};

export default { getGameId, submitNewScore, getAllScores };
