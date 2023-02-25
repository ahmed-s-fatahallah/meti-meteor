import dom from "./DOM";
import * as turn from "./turnsView";

export const popUpStyling = function (loseCondition, turnsCount) {
  if (loseCondition) {
    dom.popUp.firstChild.textContent = "YOU LOST 😞😔";
    dom.popUp.showModal();
  }
  if (turnsCount <= 0 && !loseCondition) {
    dom.popUp.firstChild.textContent = "YOU WON 🎉🎉";
    dom.restartBtn.style.backgroundColor = "#009100";
    dom.restartBtn.style.borderColor = "rgba(255, 0, 0, 0)";
    dom.popUp.showModal();
  }
};
export const restart = function (handler) {
  dom.restartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dom.popUp.close();

    const { turnsCount, meteorsNum, meteorsCounter } = handler(
      dom.tilesArry,
      dom.blueMeteor,
      dom.yellowMeteor
    );
    turn.requiredMeteors(meteorsNum, turnsCount, meteorsCounter);
    turn.TurnsCount(turnsCount, meteorsNum, meteorsCounter);
  });
};
