//  GLOBAL IMPORTS
import dom from "./DOM.js";

//  START PLAYING BUTTON HANDLER
export const startPlaying = function () {
  dom.startPlayingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dom.gameSectionEl.scrollIntoView();
  });
};
