//  GLOBAL IMPORTS
import dom from "./DOM.js";

//  START PLAYING BUTTON HANDLER
export const heroSectionHandlers = function () {
  dom.startPlayingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
  });
  dom.rulesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dom.rulesEl.showModal();
  });
  dom.closeRulesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dom.rulesEl.close();
  });
};
