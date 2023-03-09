//  GLOBAL IMPORTS
import dom from "./DOM";
import { tilesStyling } from "./tilesView";
import * as turn from "./turnsView";
import * as container from "./meteorsContainerView";
import * as popUp from "./popUpView";

// GLOBAL VARIABLES
export let isHolding;

// MOUSEDOWN AND TOUCHDOWN HANDLER
export const mouseDown = function (handler) {
  const mouseDownHandler = (e) => {
    if (
      (e.type === "touchmove" && e.targetTouches.length > 1) ||
      (e.type === "mousedown" && e.button !== 0)
    )
      return;
    const meteor = e.target.closest(".meteor");
    if (!meteor) return;
    if (e.type === "mousedown") {
      e.preventDefault();
      handler(e, e.target);
    }
    if (e.type === "touchstart") handler(e.touches[0], e.target);
    isHolding = true;
  };
  ["mousedown", "touchstart"].forEach((event) => {
    document.addEventListener(event, mouseDownHandler);
  });
};

// MOUSEMOVE AND TOUCHMOVE HANDLER
export const mouseMove = function (handler) {
  const mouseMoveHandler = (e) => {
    if (
      (e.type === "touchmove" && e.targetTouches.length > 1) ||
      (e.type === "mousemove" && e.button !== 0)
    )
      return;
    if (e.type === "mousemove") e.preventDefault();
    if (!isHolding) return;
    const meteor = e.target.closest(".meteor");
    if (!meteor) return;
    handler(e, meteor);
  };
  ["mousemove", "touchmove"].forEach((event) => {
    document.addEventListener(event, mouseMoveHandler);
  });
};

//  MOUSEUP AND TOUCHUP HANDLER
export const mouseUp = function (
  restorePos,
  detectTile,
  turnManager,
  loseConditon
) {
  const mouseUpHandler = (e) => {
    if (
      (e.type === "touchend" && e.targetTouches.length > 1) ||
      (e.type === "mouseup" && e.button !== 0)
    )
      return;
    if (e.type === "mouseup") e.preventDefault();
    isHolding = false;
    const meteor = e.target.closest(".meteor");
    if (!meteor) return;
    const tiles = detectTile(e.target, e.target.firstElementChild);
    if (!tiles) {
      restorePos(meteor);
      return;
    }
    tilesStyling(tiles, e.target);
    container.meteorsManager(e.target);
    let manager = turnManager(dom.meteorsContainerEl);
    if (!manager) return;
    turn.TurnsCount(manager.turnsCount);
    const lost = loseConditon(dom.tilesArry, dom.middleTile);
    popUp.popUpStyling(lost, manager.turnsCount);
    container.renderMeteors(manager.meteorsHTML);
    // dom.resetBtn.style.visibility = "visible";
    // dom.resetBtn.style.pointerEvents = "all";
  };
  ["mouseup", "touchend"].forEach((event) => {
    document.addEventListener(event, mouseUpHandler);
  });
};

//  BACK TO TOP BUTTON HANDLER
export const backToTop = function () {
  dom.topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
};

//  RESET GAME BUTTON HANDLER
export const resetGame = function (handler) {
  dom.resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const { turnsCount, meteorsNum, meteorsCounter } = handler(dom.tilesArry);
    dom.blueMeteor.style.display = "block";
    dom.yellowMeteor.style.display = "none";
    dom.resetBtn.style.visibility = "hidden";
    dom.resetBtn.style.pointerEvents = "none";
    turn.requiredMeteors(meteorsNum, turnsCount, meteorsCounter);
    turn.TurnsCount(turnsCount, meteorsNum, meteorsCounter);
  });
};
