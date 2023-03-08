// GLOBAL IMPORTS
import dom from "./DOM";

// RENDER TUNRS COUNT
export const TurnsCount = function (turnsCount) {
  dom.turnNumEl.textContent = `${
    turnsCount <= 0 ? "GAME OVER" : `Turn: ${turnsCount}`
  }`;
};
