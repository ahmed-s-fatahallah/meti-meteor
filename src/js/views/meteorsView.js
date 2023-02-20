import dom from "./DOM";

let isHolding;

export const mouseDown = function () {
  document.addEventListener("mousedown", () => {
    isHolding = true;
  });
};

export const moveMouse = function (handler) {
  document.addEventListener("mousemove", (e) => {
    if (!isHolding) return;
    const meteor = e.target.closest(".meteor");
    if (!meteor) return;
    handler(e, meteor);
  });
};

export const mouseUp = function (handler, detectTile) {
  document.addEventListener("mouseup", (e) => {
    isHolding = false;
    handler(dom.blueMeteor, dom.yellowMeteor);
    if (e.target !== dom.blueMeteor && e.target !== dom.yellowMeteor) return;
    const tiles = detectTile(e.target, dom.innerYellowMeteor);
    console.log(...tiles);
  });
};
