// GLOBAL IMPORTS
import dom from "./DOM";

//  PLAY AUDIO WHEN A TILE GET DESTROYED
const addAudio = function () {
  const audioEl = document.querySelector("audio");
  audioEl.loop = false;
  audioEl.play();
};
// STYLING TILE AND CHECK DESTROYED TILES HANDLER
export const tilesStyling = function (tiles, meteor) {
  if (!tiles) return;
  tiles.forEach((t) => {
    let tileHealth = +t.firstElementChild.textContent;
    if (meteor === dom.yellowMeteor) {
      t.firstElementChild.textContent = tileHealth - 3;
    } else {
      t.firstElementChild.textContent = tileHealth - 1;
    }
    if (+t.firstElementChild.textContent === 2) t.style.borderColor = "#FFD700";
    if (+t.firstElementChild.textContent === 1) t.style.borderColor = "#FF0000";
    if (+t.firstElementChild.textContent <= 0) {
      t.firstElementChild.textContent = "Destroyed";
      t.classList.add("destroyed");
      addAudio();
    }
  });
};
