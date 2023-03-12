// GLOBAL IMPORTS
import dom from "./DOM";

// RENDER TUNRS COUNT
export const TurnsCount = function (turnsCount, isGameEnd) {
  if (isGameEnd) {
    dom.turnNumEl.textContent = "GAME OVER";
    return;
  }
  dom.turnNumEl.textContent = `Turn: ${turnsCount}`;
};
