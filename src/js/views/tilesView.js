import dom from "./DOM";

export const tilesStyling = function (tiles, meteor) {
  if (!tiles) return;
  tiles.forEach((t) => {
    let tileHealth = Number(t.firstElementChild.textContent);
    if (meteor === dom.yellowMeteor) {
      t.firstElementChild.textContent = tileHealth - 3;
    } else {
      t.firstElementChild.textContent = tileHealth - 1;
    }
    if (+t.firstElementChild.textContent === 2) t.style.borderColor = "#FFD700";
    if (+t.firstElementChild.textContent === 1) t.style.borderColor = "#FF0000";
    if (+t.firstElementChild.textContent <= 0) {
      t.firstElementChild.textContent = "Destroyed";
      t.style.visibility = "hidden";
      t.classList.add("destroyed");
    }
  });
};
