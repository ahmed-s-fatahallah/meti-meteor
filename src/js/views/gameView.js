//  GLOBAL IMPORTS
import dom from "./DOM";
import { tilesStyling } from "./tilesView";
import * as turn from "./turnsView";
import * as container from "./meteorsContainerView";
import * as popUp from "./popUpView";
import * as helpers from "./../helpers";

// GLOBAL VARIABLES
export let isHolding, activeMeteor;

// MOUSEDOWN AND TOUCHDOWN HANDLER
export const mouseDown = function (handler) {
  const mouseDownHandler = (e) => {
    if (
      (e.type === "touchdown" && e.targetTouches.length > 1) ||
      (e.type === "mousedown" && e.button !== 0)
    )
      return;
    activeMeteor = e.target.closest(".move");
    if (!activeMeteor) return;
    if (e.type === "mousedown") {
      e.preventDefault();
      handler(e, activeMeteor);
    }
    if (e.type === "touchstart") handler(e.touches[0], activeMeteor);
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
    handler(e, activeMeteor);
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
    let isGameEnd;
    if (
      (e.type === "touchend" && e.targetTouches.length > 1) ||
      (e.type === "mouseup" && e.button !== 0)
    )
      return;
    if (e.type === "mouseup") e.preventDefault();
    isHolding = false;
    activeMeteor = e.target.closest(".move");
    if (!activeMeteor) return;
    const tiles = detectTile(activeMeteor, e.target.firstElementChild);
    if (!tiles) {
      restorePos(activeMeteor);
      return;
    }
    dom.startPlayingBtn.textContent = "CONTINUE";
    dom.resetBtn.style.visibility = "visible";
    dom.resetBtn.style.pointerEvents = "all";
    tilesStyling(tiles, activeMeteor);
    container.meteorsManager(activeMeteor);
    let manager = turnManager(dom.meteorsContainerEl);
    const lost = loseConditon(dom.tilesArry, dom.middleTile);
    if (lost || manager.turnsCount === 0) {
      isGameEnd = popUp.popUpStyling(lost, manager.turnsCount);
      turn.TurnsCount(manager.turnsCount, isGameEnd);
      return;
    }
    if (!manager.meteorsHTML) return;
    container.renderMeteors(manager.meteorsHTML);
    turn.TurnsCount(manager.turnsCount, isGameEnd);
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
    helpers.START_AUDIO.pause();
  });
};

//  RESET GAME BUTTON HANDLER
export const resetGame = function (handler) {
  dom.resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dom.resetBtn.style.visibility = "hidden";
    dom.resetBtn.style.pointerEvents = "none";
    const { turnsCount, meteorsHTML } = handler(dom.tilesArry);
    dom.meteorsContainerEl.querySelectorAll(".meteor").forEach((m) => {
      m.remove();
    });
    helpers.START_AUDIO.play();
    dom.startPlayingBtn.textContent = "PLAY NOW";
    turn.TurnsCount(turnsCount);
    container.renderMeteors(meteorsHTML);
  });
};
