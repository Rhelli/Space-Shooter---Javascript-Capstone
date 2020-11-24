import 'regenerator-runtime';

const fetch = require('node-fetch');

const fetchHighscores = async () => {
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/');
    return request;
  } catch (error) {
    throw new Error('Unable to fetch Highhscores! Please try again later!');
  }
}


const postHighscores = async (pilotName, score) => {
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
      pilotName,
      score,
    });
    return request;
  } catch (error) {
    throw new Error('Unable to post new Highscores! Please try again later!');
  }
};

export { fetchHighscores, postHighscores };
