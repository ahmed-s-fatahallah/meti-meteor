import dom from "./DOM";

export const renderMeteors = function (html) {
  dom.meteorsContainerEl.insertAdjacentHTML("afterbegin", html);
  dom.meteorHolderEl.insertAdjacentElement(
    "afterbegin",
    dom.meteorsContainerEl.firstChild
  );
  dom.meteorHolderEl.firstChild.classList.add("move");
};
