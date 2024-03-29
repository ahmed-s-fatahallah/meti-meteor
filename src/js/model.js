//  GLOBAL IMPORTS
import * as helpers from "./helpers";
import blueImage from "url:./../imgs/blue-meteor-nobg.png";
import yellowImage from "url:./../imgs/yellow-meteor.png";
//  GLOBAL VARIABLES
export let meteorsNum = helpers.GENERATE_RND_METEORS_NUM();
export let turnsCount = helpers.TURNS_COUNT;
export let meteorsHTML;

let initClientX,
  initClientY,
  meteorTopPos,
  meteorLeftPos,
  yellowTop,
  yellowLeft;

//  GET THE INITIAL CLICK OR TOUCH AND CURRENT METEORS POSITION
export const getInitPos = function (cursor, meteor) {
  initClientX = cursor.clientX;
  initClientY = cursor.clientY;
  if (meteor.classList.contains("yellow")) {
    if (yellowTop !== undefined && yellowLeft !== undefined) return;
    yellowTop = parseInt(getComputedStyle(meteor).top);
    yellowLeft = parseInt(getComputedStyle(meteor).left);
  }
  if (meteorTopPos !== undefined && meteorLeftPos !== undefined) return;
  meteorTopPos = parseInt(getComputedStyle(meteor).top);
  meteorLeftPos = parseInt(getComputedStyle(meteor).left);
};

//  MOVE METEORS CALC FUCNTION WHILE MOUSE AND TOUCH MOVES
export const moveMeteors = function (e, meteor) {
  let cursorPosX, cursorPosY;
  if (!meteor) return;
  if (e.type === "touchmove") {
    cursorPosX = e.touches[0].clientX - initClientX;
    cursorPosY = e.touches[0].clientY - initClientY;
  }
  if (e.type === "mousemove") {
    cursorPosX = e.clientX - initClientX;
    cursorPosY = e.clientY - initClientY;
  }
  if (meteor.classList.contains("yellow")) {
    meteor.style.top = yellowTop + cursorPosY + "px";
    meteor.style.left = yellowLeft + cursorPosX + "px";
    return;
  }
  meteor.style.top = meteorTopPos + cursorPosY + "px";
  meteor.style.left = meteorLeftPos + cursorPosX + "px";
};

//  RESTORE METEORS INITIAL POSITION AFTER DROPPING THEM ANYWHERE
export const restoreMeteorInitPos = function (meteor) {
  meteor.style.pointerEvents = "none";
  setTimeout(() => {
    meteor.style.top = meteorTopPos + "px";
    meteor.style.left = meteorLeftPos + "px";
    if (meteor.classList.contains("yellow")) {
      meteor.style.top = yellowTop + "px";
      meteor.style.left = yellowLeft + "px";
    }
    meteor.style.pointerEvents = "all";
  }, 500);
};

// GET THE TILES HIT WHEN A METEOR DROP
export const detectTiles = function (meteor) {
  const meteorData = meteor.getBoundingClientRect();
  const radius = meteorData.width / 2;
  const tilesArry = [];

  const [centerX, centerY] = centerCoordinates(meteorData);
  const middleHit = document
    .elementsFromPoint(centerX, centerY)
    .filter((el) => el.classList.contains("tile"));
  if (middleHit.length === 0) return;
  tilesArry.push(...middleHit);
  for (let angle = 0; angle <= 360; angle++) {
    const [x, y] = getCircleCoordinates(centerX, centerY, radius, angle);
    document.elementsFromPoint(x, y).forEach((el) => {
      if (el.classList.contains("tile")) tilesArry.push(el);
    });
  }
  const tilesHit = new Set(tilesArry);
  return tilesHit;
};

//  GET THE COORDINATES OF THE CENTER OF A METEOR
const centerCoordinates = function (meteorData) {
  const [centerX, centerY] = [
    meteorData.left + meteorData.width / 2,
    meteorData.top + meteorData.height / 2,
  ];
  return [centerX, centerY];
};

// get a point on circle's circumference coordinates detection function
const getCircleCoordinates = function (cx, cy, r, a) {
  let x = cx + r * Math.cos((a * Math.PI) / 180);
  let y = cy + r * Math.sin((a * Math.PI) / 180);
  return [x, y];
};

//  GENERATING METEORS HTML
export const meteorsHTMLGenerator = function (meteorsNum) {
  let finalHTML = "";
  let blueMeteorHTML = `<div class="meteor blue">
  <img src="${blueImage}" alt="blue meteor image" />
</div>
`;
  for (let i = 0; i < meteorsNum; i++) {
    finalHTML += blueMeteorHTML;
  }
  return finalHTML;
};
meteorsHTML = meteorsHTMLGenerator(meteorsNum);

//  TURNS MANAGER FUNCTION TO RETURN METEORS DROPPED, TURN NUMBER AND METEORS REQUIRED

export const turnManager = function (container) {
  if (container.querySelectorAll(".meteor").length)
    return {
      turnsCount,
    };
  turnsCount--;
  if (turnsCount === 3) {
    return {
      turnsCount,
      meteorsHTML: `<div class="meteor yellow">
      <img class= "yellow-inner" src="${yellowImage}" alt="yellow meteor image" />
    </div>`,
    };
  }
  meteorsNum = helpers.GENERATE_RND_METEORS_NUM();
  meteorsHTML = meteorsHTMLGenerator(meteorsNum);

  return {
    turnsCount,
    meteorsHTML,
  };
};

//  LOSE CONDITION FUNCTION TO DETECT HOW MANY TILES WERE DESTROYED EACH DROP
export const loseConditoin = function (tilesContainer, middleTile) {
  let counter = 0;
  if (middleTile.classList.contains("destroyed")) return true;
  tilesContainer.forEach((tile) => {
    if (tile.classList.contains("destroyed")) counter++;
  });
  if (counter >= 4) return true;
};

//  OBSERVE THE GAME SECTION TO SHOW BACK TO TOP BTN
export const isBtnVisible = function (heroSection, topBtn) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          topBtn.style.display = "block";
        } else {
          topBtn.style.display = "none";
        }
      });
    },
    {
      root: null,
      threshold: 0.3,
    }
  );
  observer.observe(heroSection);
};

//  RESTART GAME FUCNTION
export const restart = function (tiles) {
  turnsCount = helpers.TURNS_COUNT;
  meteorsNum = helpers.GENERATE_RND_METEORS_NUM();
  meteorsHTML = meteorsHTMLGenerator(meteorsNum);
  tiles.forEach((tile) => {
    if (tile.classList.contains("destroyed"))
      tile.classList.remove("destroyed");
    tile.firstElementChild.textContent = 3;
    tile.style.borderColor = "rgb(54, 48, 158)";
    if (tile.classList.contains("middle"))
      tile.firstElementChild.textContent = 4;
  });

  return {
    turnsCount,
    meteorsHTML,
  };
};
