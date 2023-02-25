import dom from "./DOM.js";

export const startPlaying = function () {
  dom.startPlayingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dom.gameSectionEl.scrollIntoView();
  });
};
