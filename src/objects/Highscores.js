import 'regenerator-runtime';

const fetch = require('node-fetch');

const initializeGame = async () => {
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Deep Space Defence '}),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    throw new Error('Unable to initialize game. Please try again.');
  }
};

const postHighscores = async (pilotName, score) => {
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WTgGifRKH5MUvEcfROt5/scores/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pilotName, score }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    throw new Error('Unable to post Highscores! Please try again later!')
  }
};

const sortHighscores = (data) => {
  const leaderboard = [];
  data.forEach(entry => {
    leaderboard.push([entry.user, entry.score]);
  });

  leaderboard.sort((a, b) => b[1] - a[1]);

  return leaderboard;
};

const fetchHighscores = async () => {
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WTgGifRKH5MUvEcfROt5/scores/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();
    return sortHighscores(response.result);
  } catch (error) {
    throw new Error('Unable to fetch Highscores! Please try again later!');
  }
};


export { initializeGame, fetchHighscores, postHighscores };
