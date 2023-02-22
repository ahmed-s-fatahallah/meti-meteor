import dom from "./DOM";

let meteorsNum;

export const TurnsCount = function (turnsCount, requiredMeteors, counter) {
  dom.turnsCounter.textContent = `${
    turnsCount <= 0 ? prompt("GAME OVER") : `Turns remaining: ${turnsCount}`
  }`;
  dom.meteorsCounter.textContent = `Meteors count: ${counter}/ ${requiredMeteors}`;
};

export const requiredMeteors = function (generatedMeteorsNum, turnsCount) {
  meteorsNum = generatedMeteorsNum;
  dom.meteorsCounter.textContent = `Meteors count: 0/ ${meteorsNum}`;
  dom.turnsCounter.textContent = `Turns remaining: ${turnsCount}`;
};
