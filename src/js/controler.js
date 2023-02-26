//  GLOBAL IMPORTS
import dom from "./views/DOM";
import * as model from "./model";
import * as game from "./views/gameView";
import * as turns from "./views/turnsView";
import { renderCurrentYear } from "./views/copyRightView";
import * as popUp from "./views/popUpView";
import * as start from "./views/rulesSectionView";
import * as helpers from "./helpers";

//  INIT FUNCTION
const init = function () {
  renderCurrentYear(helpers.GET_CURRENT_YEAR);
  model.meteorsInitPos(dom.blueMeteor, dom.yellowMeteor);
  game.mouseDown(model.getInitPos);
  game.mouseMove(model.moveMeteors);
  game.mouseUp(
    model.restoreMeteorInitPos,
    model.meteorsDroppedTiles,
    model.turnManager,
    model.loseConditoin
  );
  turns.requiredMeteors(
    model.meteorsNum,
    model.turnsCount,
    model.meteorsCounter
  );
  start.startPlaying();
  game.backToTop();
  model.isBtnVisible(dom.gameSectionEl, dom.topBtn);
  popUp.restart(model.restart);
  game.resetGame(model.restart);
};

init();
