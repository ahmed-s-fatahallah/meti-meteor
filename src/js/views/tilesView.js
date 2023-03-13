//  GLOBAL IMPORTS
import * as helpers from "./../helpers";

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
    if (+t.firstElementChild.textContent === 2) {
      t.style.borderColor = "rgb(255,215,0)";
      helpers.SHAKE_AUDIO.play();
    }
    if (+t.firstElementChild.textContent === 1) {
      t.style.borderColor = "rgb(255,0,0)";
      helpers.SHAKE_AUDIO.play();
    }
    if (+t.firstElementChild.textContent <= 0) {
      t.classList.add("destroyed");
      helpers.DESTROY_AUDIO.play();
    }
  });
};
