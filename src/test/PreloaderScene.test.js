import PreloaderScene from '../scenes/PreloaderScene';

test("sets a constructor with a super of 'preloader'", () => {
  expect(PreloaderScene.super).toBe('Preloader');
});
