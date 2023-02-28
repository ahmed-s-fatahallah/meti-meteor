// GLOBAL IMPORTS
import dom from "./DOM";

// RENDER TUNRS AND METEORS COUNTERS
export const TurnsCount = function (turnsCount, requiredMeteors, counter) {
  dom.turnsCounter.textContent = `${
    turnsCount <= 0 ? "GAME OVER" : `Turns remaining: ${turnsCount}`
  }`;
  dom.meteorsCounter.textContent = `Meteors count: ${counter} / ${requiredMeteors}`;
};

// RENDER TURNS AND METEORS COUNTER WHEN GAME STARTS
export const requiredMeteors = function (
  generatedMeteorsNum,
  turnsCount,
  counter
) {
  dom.meteorsCounter.textContent = `Meteors count: ${counter} / ${generatedMeteorsNum}`;
  dom.turnsCounter.textContent = `Turns remaining: ${turnsCount}`;
};
