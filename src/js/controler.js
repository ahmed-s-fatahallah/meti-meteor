const meteorsEl = document.querySelectorAll(".meteor");
const mainSectionEl = document.querySelector(".main");
const tilesEl = document.querySelectorAll(".tile");
const [blueMeteor, yellowMeteor] = Array.from(meteorsEl);

let initTop, initLeft;

const MeteorsObj = {
  blueMeteor: {
    topPos: getComputedStyle(blueMeteor).top,
    leftPos: getComputedStyle(blueMeteor).left,
  },
  yellowMeteor: {
    topPos: getComputedStyle(yellowMeteor).top,
    leftPos: getComputedStyle(yellowMeteor).left,
  },
};

let isHolding = false;

document.addEventListener("mousedown", (e) => {
  isHolding = true;
});
document.addEventListener("mouseup", (e) => {
  isHolding = false;
  setTimeout(() => {
    blueMeteor.style.top = MeteorsObj.blueMeteor.topPos;
    blueMeteor.style.left = MeteorsObj.blueMeteor.leftPos;
    yellowMeteor.style.top = MeteorsObj.yellowMeteor.topPos;
    yellowMeteor.style.left = MeteorsObj.yellowMeteor.leftPos;
  }, 1000);
});

document.addEventListener("mousemove", (e) => {
  if (!isHolding) return;
  const meteor = e.target.closest(".meteor");
  if (!meteor) return;
  meteor.style.top =
    parseInt(getComputedStyle(meteor).top) + e.movementY + "px";
  meteor.style.left =
    parseInt(getComputedStyle(meteor).left) + e.movementX + "px";
});

const firstTile = document.querySelector(".tile");
document.addEventListener("mouseup", () => {
  const meteorPos = meteorsEl[0].getBoundingClientRect();
  const tilePos = firstTile.getBoundingClientRect();
  if (
    tilePos.x <= meteorPos.x &&
    tilePos.x + tilePos.width - 60 >= meteorPos.x &&
    tilePos.y <= meteorPos.y &&
    tilePos.y + tilePos.height >= meteorPos.y
  ) {
    console.log(tilePos, meteorPos);
    console.log("meteor");
  }
});

// console.log(firstTile.getBoundingClientRect());

// bottom: 695;
// height: 200;
// left: 146;
// right: 346;
// top: 495;
// width: 200;
// x: 146;
// y: 495;
