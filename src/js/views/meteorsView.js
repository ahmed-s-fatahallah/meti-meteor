import dom from "./DOM";
import { tilesStyling } from "./tilesView";
import * as turn from "./turnsView";
import * as popUp from "./popUpView";

export let isHolding;
export let meteorsCounter = 1;

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
  loseConditon
) {
  document.addEventListener("mouseup", (e) => {
    e.preventDefault();
    isHolding = false;
    if (e.target !== dom.blueMeteor && e.target !== dom.yellowMeteor) return;
    restorePos(dom.blueMeteor, dom.yellowMeteor);
    const tiles = detectTile(e.target, dom.innerYellowMeteor);
    if (!tiles) return;
    tilesStyling(tiles, e.target);

    let manager = turnManager(meteorsCounter);
    const lost = loseConditon(dom.tilesArry, dom.middleTile);
    if (!manager) return;
    let { counter, turnsCount, meteorsNum } = manager;
    meteorsCounter = counter;
    dom.yellowMeteor.style.display = "none";
    dom.blueMeteor.style.display = "block";
    if (turnsCount === 3) {
      dom.yellowMeteor.style.display = "flex";
      dom.blueMeteor.style.display = "none";
    }
    turn.TurnsCount(turnsCount, meteorsNum, meteorsCounter);
    popUp.popUpStyling(lost, turnsCount);
  });
};
