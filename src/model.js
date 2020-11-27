/* eslint-disable no-underscore-dangle */
export default class Model {
  constructor() {
    this._soundOn = true;
    this._musicOn = true;
    this._titleMusicPlaying = false;
    this._gameMusicPlaying = false;
  }

  set musicOn(value) {
    this._musicOn = value;
  }

  get musicOn() {
    return this._musicOn;
  }

  set soundOn(value) {
    this._soundOn = value;
  }

  get soundOn() {
    return this._soundOn;
  }

  set titleMusicPlaying(value) {
    this._titleMusicPlaying = value;
  }

  get titleMusicPlaying() {
    return this._titleMusicPlaying;
  }

  set gameMusicPlaying(value) {
    this._gameMusicPlaying = value;
  }

  get gameMusicPlaying() {
    return this._gameMusicPlaying;
  }
}
