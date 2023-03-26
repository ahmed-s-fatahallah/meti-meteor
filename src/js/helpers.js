//  GLOBAL IMPORTS
import startAduio from "url:./../../src/audio/start.mp3";
import winAudio from "url:./../../src/audio/win.mp3";
import loseAudio from "url:./../../src/audio/lose.mp3";
import shakeAudio from "url:./../../src/audio/shake.mp3";
import destroyAudio from "url:./../../src/audio/destroySound.mp3";

//  AUDIO WHEN A TILE GET DESTROYED
export const START_AUDIO = new Audio(startAduio);
export const WIN_AUDIO = new Audio(winAudio);
export const LOSE_AUDIO = new Audio(loseAudio);
export const SHAKE_AUDIO = new Audio(shakeAudio);
export const DESTROY_AUDIO = new Audio(destroyAudio);

//  TURNS COUNTER
export const TURNS_COUNT = 5;

//  GENERATE RANDOM METEORS NUMBER BETWEEN 3-5
export const GENERATE_RND_METEORS_NUM = function () {
  const requiredMeteors = Math.trunc(Math.random() * (5 - 3 + 1) + 3);
  return requiredMeteors;
};

//  FOOTER GET YEAR FUCNTION FOR COPYRIGHT
export const GET_CURRENT_YEAR = function () {
  const year = new Date().getFullYear();
  return year;
};
