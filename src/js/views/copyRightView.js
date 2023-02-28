import dom from "./DOM";

//  RENDER COPYRIGHT YEAR FUNCTION
export const renderCurrentYear = function (year) {
  dom.copyRight.textContent = year();
};
