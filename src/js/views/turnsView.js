import dom from "./DOM";

// export const renderTurnsCounter = function (html) {
//   dom.mainSectionEl.insertAdjacentHTML("afterbegin", html);
// };

export const TurnsCount = function (turnsCount, requiredMeteors, counter) {
  dom.turnsCounter.innerHTML = `${
    turnsCount <= 0 ? "GAME OVER" : `Turns remaining: ${turnsCount}`
  }`;
  dom.meteorsCounter.innerHTML = `Meteors count: ${counter}/ ${requiredMeteors}`;
};
