//  QUERY ALL NEEDED DOM ELEMENTS
const DOM = {
  mainSectionEl: document.querySelector(".main"),
  gameSectionEl: document.querySelector(".section-game"),
  heroSectionEl: document.querySelector(".hero-section"),
  rulesEl: document.querySelector(".rules"),
  rulesBtn: document.querySelector(".rules-btn"),
  closeRulesBtn: document.querySelector(".close_rules--btn"),
  tilesArry: Array.from(document.querySelectorAll(".tile")),
  turnNumEl: document.querySelector(".turn-num"),
  meteorsContainerEl: document.querySelector(".meteors-container"),
  meteorHolderEl: document.querySelector(".meteor-holder"),
  middleTile: document.querySelector(".middle"),
  popUp: document.querySelector(".pop-up"),
  restartBtn: document.querySelector(".restart-btn"),
  copyRight: document.querySelector(".year"),
  startPlayingBtn: document.querySelector(".play-btn"),
  topBtn: document.querySelector(".top-btn"),
  resetBtn: document.querySelector(".reset-btn"),
  volumeInputEl: document.querySelector("#volume"),
  volumeLevelEl: document.querySelector(".volume-level"),
  volumeMuteEl: document.querySelector("#mute"),
};

export default DOM;
