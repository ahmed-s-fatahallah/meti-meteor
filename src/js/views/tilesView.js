// GLOBAL IMPORTS
import audiofile from "url:./../../audio/destroySound.mp3";
//  PLAY AUDIO WHEN A TILE GET DESTROYED
const addAudio = function () {
  const audio = new Audio(audiofile);
  audio.loop = false;
  audio.play();
};
// STYLING TILE AND CHECK DESTROYED TILES HANDLER
export const tilesStyling = function (tiles, meteor) {
  if (!tiles) return;
  tiles.forEach((t) => {
    let tileHealth = +t.firstElementChild.textContent;
    t.classList.add("shake");
    setTimeout(() => {
      t.classList.remove("shake");
    }, 800);
    if (meteor.classList.contains("yellow")) {
      t.firstElementChild.textContent = tileHealth - 3;
    } else {
      t.firstElementChild.textContent = tileHealth - 1;
    }
    if (+t.firstElementChild.textContent === 2) t.style.borderColor = "#FFD700";
    if (+t.firstElementChild.textContent === 1) t.style.borderColor = "#FF0000";
    if (+t.firstElementChild.textContent <= 0) {
      t.classList.add("destroyed");
      addAudio();
    }
  });
};
