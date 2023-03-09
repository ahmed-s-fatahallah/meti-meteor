import dom from "./DOM";
export const renderMeteors = function (html) {
  dom.meteorsContainerEl.insertAdjacentHTML("afterbegin", html);
  dom.meteorHolderEl.insertAdjacentElement(
    "afterbegin",
    dom.meteorsContainerEl.firstChild
  );
  dom.meteorHolderEl.firstChild.classList.add("move");
};

export const meteorsManager = function (meteor) {
  meteor.remove();
  if (!dom.meteorsContainerEl.querySelectorAll(".meteor").length) return;
  dom.meteorHolderEl.insertAdjacentElement(
    "afterbegin",
    dom.meteorHolderEl.previousElementSibling
  );
  dom.meteorHolderEl.firstChild.classList.add("move");
};
