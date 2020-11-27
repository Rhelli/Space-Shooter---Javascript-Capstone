import { initializeGame, postHighscores, fetchHighscores } from './mockHighscoreAPI';

describe('Initializing a new game and retrieving a new game ID', () => {
  test('Initializes and retrieves an Object', () => initializeGame().then(response => {
    expect(typeof response).toBe('object');
  }));

  test('Retrieves an Object with a string containing a new ID', () => initializeGame().then(response => {
    expect(typeof response.result).toBe('string');
  }));
});

describe('Posting new highscores via async/await', () => {
  test('Will post a new highscore with a username and a score without errors', () => postHighscores('Jim', 40).then(response => {
    expect(response.result).toStrictEqual('Leaderboard score created correctly.');
  }));
});

describe('Retrieving highscores from the API', () => {
  test('It will return an object', () => fetchHighscores().then(response => {
    expect(typeof response).toBe('object');
  }));
});
