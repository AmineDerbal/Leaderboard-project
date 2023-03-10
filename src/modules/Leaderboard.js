const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mAoPJzmVnCWRKV5vjWgz/scores/';

export const getAllScores = async () => {
  const dataStream = await fetch(`${url}`);
  const dataResponse = await dataStream.json();
  return dataResponse;
};

export const submitNewScore = async (user, score) => {
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

  const dataStream = await fetch(`${url}`, gameOptions);
  const dataResponse = await dataStream.json();

  return dataResponse;
};

export default { submitNewScore, getAllScores };
