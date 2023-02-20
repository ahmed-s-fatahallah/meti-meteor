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

export const moveMeteors = function (e, meteor) {
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
  }, 3000);
};

export const meteorsDroppedTiles = function (meteor) {
  let tilesHit;
  meteorData = meteor.getBoundingClientRect();

  const sidesCoordinatesArry = sidesCoordinates(meteorData);
  const angleCoordinatesArry = anglesCoordinates(meteorData);
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
    const outerHit = sidesCoordinatesArry
      .concat(angleCoordinatesArry)
      .map((c) => document.elementFromPoint(...c))
      .filter((el) => el !== null && el.classList[0] === "tile");
    tilesHit = outerHit.concat(middleHit);
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
    meteorData.left + 72,
    meteorData.top + 72,
  ];
  const [rightTopCornerX, rightTopCornerY] = [
    meteorData.right - 72,
    meteorData.top + 72,
  ];
  const [leftBottomCornerX, leftBottomCornerY] = [
    meteorData.left + 72,
    meteorData.bottom - 72,
  ];
  const [rightBottomCornerX, rightBottomCornerY] = [
    meteorData.right - 72,
    meteorData.bottom - 72,
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
