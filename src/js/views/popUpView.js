import dom from "./DOM";

export const popUpStyling = function (loseCondition, turnsCount) {
  if (loseCondition) {
    dom.popUp.showModal();
    dom.popUp.style.display = "flex";
    dom.popUp.firstChild.textContent = "YOU LOST 😞😔";
  }
  if (turnsCount <= 0 && !loseCondition) {
    dom.popUp.showModal();
    dom.popUp.style.display = "flex";
    dom.popUp.firstChild.textContent = "YOU WON 🎉🎉";
    dom.restartBtn.style.backgroundColor = "green";
  }
  dom.restartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dom.popUp.close();
    dom.popUp.style.display = "none";
  });
};
