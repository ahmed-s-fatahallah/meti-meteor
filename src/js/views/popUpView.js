import dom from "./DOM";

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
export const restart = function () {
  dom.restartBtn.addEventListener("click", () => {
    dom.popUp.close();
  });
};
