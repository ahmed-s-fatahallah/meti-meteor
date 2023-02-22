import dom from "./DOM";
import { tilesStyling } from "./tilesView";
import * as turn from "./turnsView";

export let isHolding;
export let counter = 0;

export const mouseDown = function () {
  document.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isHolding = true;
  });
};

export const moveMouse = function (handler) {
  document.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!isHolding) return;
    const meteor = e.target.closest(".meteor");
    if (!meteor) return;
    handler(e, meteor);
  });
};

export const mouseUp = function (
  restorePos,
  detectTile,
  turnManager,
  winConditon
) {
  document.addEventListener("mouseup", (e) => {
    e.preventDefault();
    isHolding = false;
    restorePos(dom.blueMeteor, dom.yellowMeteor);
    if (e.target !== dom.blueMeteor && e.target !== dom.yellowMeteor) return;
    const tiles = detectTile(e.target, dom.innerYellowMeteor);
    if (!tiles) return;
    tilesStyling(tiles, e.target);
    counter++;
    let manager = turnManager(counter);
    winConditon(dom.tilesArry, dom.middleTile);
    if (!manager) return;
    let { isDone, turnsCount, meteorsNum } = manager;
    dom.yellowMeteor.style.display = "none";
    dom.blueMeteor.style.display = "block";
    if (turnsCount === 3) {
      dom.yellowMeteor.style.display = "flex";
      dom.blueMeteor.style.display = "none";
    }
    if (isDone) counter = 0;
    turn.TurnsCount(turnsCount, meteorsNum, counter);
  });
};
