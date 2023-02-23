import dom from "./DOM";

export const popUpStyling = function (loseCondition, turnsCount) {
  if (loseCondition) {
    dom.popUp.showModal();
    dom.popUp.firstChild.textContent = "YOU LOST 😞😔";
  }
  if (turnsCount <= 0 && !loseCondition) {
    dom.popUp.showModal();
    dom.popUp.firstChild.textContent = "YOU WON 🎉🎉";
    dom.restartBtn.style.backgroundColor = "#009100";
    dom.restartBtn.style.borderColor = "rgba(255, 0, 0, 0)";
  }
  dom.restartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dom.popUp.close();
    dom.popUp.style.display = "none";
  });
};
