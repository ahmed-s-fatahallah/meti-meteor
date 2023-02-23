import dom from "./DOM";

export const renderCurrentYear = function (year) {
  dom.copyRight.textContent = year();
};
