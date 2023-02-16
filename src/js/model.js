let meteorsPos;
const meteorsInitPos = function (blueMeteor, yellowMeteor) {
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

const moveMeteors = function (meteor, e) {
  meteor.style.top =
    parseInt(getComputedStyle(meteor).top) + e.movementY + "px";
  meteor.style.left =
    parseInt(getComputedStyle(meteor).left) + e.movementX + "px";
};

const restoreMeteorInitPos = function (blueMeteor, yellowMeteor) {
  setTimeout(() => {
    blueMeteor.style.top = meteorsPos.blueMeteor.topPos;
    blueMeteor.style.left = meteorsPos.blueMeteor.leftPos;
    yellowMeteor.style.top = meteorsPos.yellowMeteor.topPos;
    yellowMeteor.style.left = meteorsPos.yellowMeteor.leftPos;
  }, 1000);
};

const targetTile = function (meteor, tile) {
  const meteorPos = meteor.getBoundingClientRect();
  const tilePos = tile.getBoundingClientRect();
  if (
    tilePos.x <= meteorPos.x &&
    tilePos.x + tilePos.width - 60 >= meteorPos.x &&
    tilePos.y <= meteorPos.y &&
    tilePos.y + tilePos.height >= meteorPos.y
  ) {
    console.log(tilePos, meteorPos);
    console.log("dropped");
  }
};

export { meteorsInitPos, moveMeteors, restoreMeteorInitPos, targetTile };
