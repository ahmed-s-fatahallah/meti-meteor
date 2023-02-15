const meteorsEl = document.querySelectorAll(".meteor");
const mainSectionEl = document.querySelector(".main");
const tilesEl = document.querySelectorAll(".tile");
const [blueMeteor, yellowMeteor] = Array.from(meteorsEl);

const blueInitPosTop = getComputedStyle(blueMeteor).top;
const blueInitPosLeft = getComputedStyle(blueMeteor).left;
const yellowInitPosTop = getComputedStyle(yellowMeteor).top;
const yellowInitPosLeft = getComputedStyle(yellowMeteor).left;
let isHolding = false;

document.addEventListener("mousedown", (e) => {
  isHolding = true;
});
document.addEventListener("mouseup", (e) => {
  isHolding = false;
  setTimeout(() => {
    blueMeteor.style.top = blueInitPosTop;
    blueMeteor.style.left = blueInitPosLeft;
    yellowMeteor.style.top = yellowInitPosTop;
    yellowMeteor.style.left = yellowInitPosLeft;
  }, 400);
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

document.addEventListener("mouseover", (e) => {
  const tile = e.target.closest(".tile");
  if (!tile) return;
  console.log(tile);
});
