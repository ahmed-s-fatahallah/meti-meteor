let meteorsPos;
export const meteorsInitPos = function (blueMeteor, yellowMeteor) {
  const meteorsObj = {
    blueMeteor: {
      topPos: getComputedStyle(blueMeteor).top,
      leftPos: getComputedStyle(blueMeteor).left,
    },
    yellowMeteor: {
      topPos: getComputedStyle(yellowMeteor).top,
      leftPos: getComputedStyle(yellowMeteor).left,
    },
  };
  meteorsPos = meteorsObj;
};

export const meteorsDroppedTiles = function (meteor) {
  meteorData = meteor.getBoundingClientRect();
  const [topBoundryX, topBoundryY] = [
    meteorData.left + meteorData.width / 2,
    meteorData.top - 1,
  ];
  const [bottomBoundryX, bottomBoundryY] = [
    meteorData.right - meteorData.width / 2,
    meteorData.bottom,
  ];
  const [leftBoundryX, leftBoundryY] = [
    meteorData.left - 1,
    meteorData.bottom - meteorData.height / 2,
  ];
  const [rightBoundryX, rightBoundryY] = [
    meteorData.right,
    meteorData.bottom - meteorData.height / 2,
  ];
  const el1 = document.elementFromPoint(topBoundryX, topBoundryY);
  const el2 = document.elementFromPoint(bottomBoundryX, bottomBoundryY);
  const el3 = document.elementFromPoint(leftBoundryX, leftBoundryY);
  const el4 = document.elementFromPoint(rightBoundryX, rightBoundryY);

  const droppedZone = Array.from(new Set([el1, el2, el3, el4]));
  const results = droppedZone.filter((el) => el.classList[0] === "tile");
  if (results.length === 0) return;
  return results;
};

export const moveMeteors = function (meteor, e) {
  meteor.style.top =
    parseInt(getComputedStyle(meteor).top) + e.movementY + "px";
  meteor.style.left =
    parseInt(getComputedStyle(meteor).left) + e.movementX + "px";
};

export const restoreMeteorInitPos = function (blueMeteor, yellowMeteor) {
  setTimeout(() => {
    blueMeteor.style.top = meteorsPos.blueMeteor.topPos;
    blueMeteor.style.left = meteorsPos.blueMeteor.leftPos;
    yellowMeteor.style.top = meteorsPos.yellowMeteor.topPos;
    yellowMeteor.style.left = meteorsPos.yellowMeteor.leftPos;
  }, 1000);
};

document.addEventListener("mouseup", (e) => {
  const meteor = document.querySelector(".meteor");
  if (e.target !== meteor) return;
  const tiles = meteorsDroppedTiles(meteor);
  tiles.forEach((t) => (t.innerHTML = "destroyed"));
});
