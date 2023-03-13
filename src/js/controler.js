//  GLOBAL IMPORTS
import dom from "./views/DOM";
import * as model from "./model";
import * as game from "./views/gameView";
import * as turns from "./views/turnsView";
import * as container from "./views/meteorsContainerView";
import { renderCurrentYear } from "./views/copyRightView";
import * as popUp from "./views/popUpView";
import * as start from "./views/heroSectionView";
import * as helpers from "./helpers";

//  INIT FUNCTION
const init = function () {
  renderCurrentYear(helpers.GET_CURRENT_YEAR);
  container.renderMeteors(model.meteorsHTML);
  game.mouseDown(model.getInitPos);
  game.mouseMove(model.moveMeteors);
  game.mouseUp(
    model.restoreMeteorInitPos,
    model.meteorsDroppedTiles,
    model.turnManager,
    model.loseConditoin
  );
  turns.TurnsCount(model.turnsCount);
  start.heroSectionHandlers();
  game.backToTop();
  model.isBtnVisible(dom.heroSectionEl, dom.topBtn);
  popUp.restart(model.restart);
  game.resetGame(model.restart);
  game.volumeController();
};
init();
