export const tilesStyling = function (tiles, health) {
  if (!tiles) return;
  tiles.forEach((t) => {
    t.style.borderColor = "#FFD700";
    t.innerHTML = `<span class="tile-text">${
      health >= 1 ? health : "destroyed"
    }</span>`;
  });
  return health - 1;
};
