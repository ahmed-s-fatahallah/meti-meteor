//  GLOBAL IMPORTS
import dom from "./DOM";
import * as turn from "./turnsView";

//  STYLING POPUP WINDOW ACCORDING TO WIN OR LOSE CONDITIONS
export const popUpStyling = function (loseCondition, turnsCount) {
  if (loseCondition) {
    dom.popUp.firstChild.textContent = "YOU LOST 😞😔";
    dom.popUp.showModal();
    dom.restartBtn.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
    dom.restartBtn.style.borderColor = "rgba(255, 0, 0, 0)";
  }
  if (turnsCount <= 0 && !loseCondition) {
    dom.popUp.firstChild.textContent = "YOU WON 🎉🎉";
    dom.restartBtn.style.backgroundColor = "#009100";
    dom.restartBtn.style.borderColor = "rgba(255, 0, 0, 0)";
    dom.popUp.showModal();
  }
};

// STYLING THE RESET BUTTON IN THE POPUP WINDOW ACCORDING TO WIN OR LOSE CONDITION
export const restart = function (handler) {
  dom.restartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dom.popUp.close();

    const { turnsCount, meteorsNum, meteorsCounter } = handler(dom.tilesArry);
    dom.blueMeteor.style.display = "block";
    dom.yellowMeteor.style.display = "none";
    dom.resetBtn.style.visibility = "hidden";
    dom.resetBtn.style.pointerEvents = "none";
    turn.requiredMeteors(meteorsNum, turnsCount, meteorsCounter);
    turn.TurnsCount(turnsCount, meteorsNum, meteorsCounter);
  });
};
