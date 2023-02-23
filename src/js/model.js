export let meteorsPos, meteorsNum;

export let turnsCount = 5;
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

export const moveMeteors = function (e, meteor) {
  meteor.style.top =
    parseInt(getComputedStyle(meteor).top) + e.movementY + "px";
  meteor.style.left =
    parseInt(getComputedStyle(meteor).left) + e.movementX + "px";
};

export const restoreMeteorInitPos = function (blueMeteor, yellowMeteor) {
  blueMeteor.style.pointerEvents = "none";
  yellowMeteor.style.pointerEvents = "none";
  setTimeout(() => {
    blueMeteor.style.top = meteorsPos.blueMeteor.topPos;
    blueMeteor.style.left = meteorsPos.blueMeteor.leftPos;
    yellowMeteor.style.top = meteorsPos.yellowMeteor.topPos;
    yellowMeteor.style.left = meteorsPos.yellowMeteor.leftPos;
    blueMeteor.style.pointerEvents = "auto";
    yellowMeteor.style.pointerEvents = "auto";
  }, 1000);
};

export const meteorsDroppedTiles = function (meteor, yellowInner) {
  let tilesHit;
  meteorData = meteor.getBoundingClientRect();
  const innerData = yellowInner.getBoundingClientRect();

  const sidesCoordinatesArry = sidesCoordinates(meteorData);
  const angleCoordinatesArry = anglesCoordinates(meteorData);
  const innerYellowCoordinatesArry = innerYellowCoordinates(innerData);
  const center = centerCoordinates(meteorData);
  const middleHit = document
    .elementsFromPoint(...center)
    .filter((el) => el.classList[0] === "tile");
  if (middleHit.length === 0) return;
  if (Array.from(meteor.classList).includes("blue")) {
    const sidesHit = sidesCoordinatesArry.map((c) =>
      document.elementFromPoint(...c)
    );

    tilesHit = sidesHit.concat(middleHit);
  } else {
    const outerInnerHit = sidesCoordinatesArry
      .concat(angleCoordinatesArry)
      .concat(innerYellowCoordinatesArry)
      .map((c) => document.elementFromPoint(...c))
      .filter((el) => el !== null && el.classList[0] === "tile");
    tilesHit = outerInnerHit.concat(middleHit);
  }

  const droppedZone = Array.from(new Set(Array.from(tilesHit)));
  return droppedZone;
};

const sidesCoordinates = function (meteorData) {
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

  return [
    [topBoundryX, topBoundryY],
    [bottomBoundryX, bottomBoundryY],
    [leftBoundryX, leftBoundryY],
    [rightBoundryX, rightBoundryY],
  ];
};

const anglesCoordinates = function (meteorData) {
  const [leftTopCornerX, leftTopCornerY] = [
    meteorData.left + 71,
    meteorData.top + 71,
  ];
  const [rightTopCornerX, rightTopCornerY] = [
    meteorData.right - 71,
    meteorData.top + 71,
  ];
  const [leftBottomCornerX, leftBottomCornerY] = [
    meteorData.left + 71,
    meteorData.bottom - 71,
  ];
  const [rightBottomCornerX, rightBottomCornerY] = [
    meteorData.right - 71,
    meteorData.bottom - 71,
  ];

  return [
    [leftTopCornerX, leftTopCornerY],
    [rightTopCornerX, rightTopCornerY],
    [leftBottomCornerX, leftBottomCornerY],
    [rightBottomCornerX, rightBottomCornerY],
  ];
};

const centerCoordinates = function (meteorData) {
  const [centerX, centerY] = [
    meteorData.left + meteorData.width / 2,
    meteorData.top + meteorData.height / 2,
  ];

  return [centerX, centerY];
};

const innerYellowCoordinates = function (innerData) {
  const [topInnerBoundryX, topInnerBoundryY] = [
    innerData.left + innerData.width / 2,
    innerData.top - 1,
  ];
  const [bottomInnerBoundryX, bottomInnerBoundryY] = [
    innerData.right - innerData.width / 2,
    innerData.bottom,
  ];
  const [leftInnerBoundryX, leftInnerBoundryY] = [
    innerData.left - 1,
    innerData.bottom - innerData.height / 2,
  ];
  const [rightInnerBoundryX, rightInnerBoundryY] = [
    innerData.right,
    innerData.bottom - innerData.height / 2,
  ];

  return [
    [topInnerBoundryX, topInnerBoundryY],
    [bottomInnerBoundryX, bottomInnerBoundryY],
    [leftInnerBoundryX, leftInnerBoundryY],
    [rightInnerBoundryX, rightInnerBoundryY],
  ];
};
const generateMeteorsNum = function () {
  const requiredMeteors = Math.trunc(Math.random() * (4 - 2 + 1) + 2);
  return requiredMeteors;
};

meteorsNum = generateMeteorsNum();
export const turnManager = function (counter) {
  counter++;
  if (meteorsNum < counter) {
    turnsCount--;
    counter = 1;
    meteorsNum = generateMeteorsNum();
    if (turnsCount === 3) meteorsNum = 1;
    return {
      counter,
      turnsCount,
      meteorsNum,
    };
  }
  return {
    counter,
    turnsCount,
    meteorsNum,
  };
};

export const loseConditoin = function (tilesContainer, middleTile) {
  let counter = 0;
  if (middleTile.classList.contains("destroyed")) return true;
  tilesContainer.forEach((tile) => {
    if (tile.classList.contains("destroyed")) counter++;
  });
  if (counter >= 4) return true;
};
