import Model from '../model';

jest.mock('../model');

beforeEach(() => {
  Model.mockClear();
});

describe("It's structure defines global settings for sound and music", () => {
  it('Can define whether the sound for the game is on', () => {
    const model = new Model();
    model.soundOn = true;
    expect(model.soundOn).toBe(true);
  });

  it('Can be used to turn the sound off globally', () => {
    const model = new Model();
    model.soundOn = true;
    expect(model.soundOn).toBe(true);
    model.soundOn = false;
    expect(model.soundOn).toBe(false);
  });

  it('Can be used to turn the game music on', () => {
    const model = new Model();
    model.musicOn = true;
    expect(model.musicOn).toBe(true);
  });

  it('Can be used to switch the game music off globally', () => {
    const model = new Model();
    model.musicOn = true;
    expect(model.musicOn).toBe(true);
    model.musicOn = false;
    expect(model.musicOn).toBe(false);
  });
});

describe('It can be used to control different scenes music', () => {
  it('Can be used to define whether the title scene music is playing', () => {
    const model = new Model();
    model.titleMusicPlaying = true;
    expect(model.titleMusicPlaying).toBe(true);
  });

  it('Can be used to turn off the title music', () => {
    const model = new Model();
    model.titleMusicPlaying = true;
    expect(model.titleMusicPlaying).toBe(true);
    model.titleMusicPlaying = false;
    expect(model.titleMusicPlaying).toBe(false);
  });

  it('Can be used to turn on the game music', () => {
    const model = new Model();
    model.gameMusicPlaying = true;
    expect(model.gameMusicPlaying).toBe(true);
  });

  it('Can be used to turn off the game music', () => {
    const model = new Model();
    model.gameMusicPlaying = true;
    expect(model.gameMusicPlaying).toBe(true);
    model.gameMusicPlaying = false;
    expect(model.gameMusicPlaying).toBe(false);
  });
});
