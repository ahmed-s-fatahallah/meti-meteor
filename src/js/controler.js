import dom from "./views/DOM";
import * as model from "./model";
import * as meteor from "./views/meteorsView";
import * as tiles from "./views/tilesView";
import * as turns from "./views/turnsView";
import * as popUp from "./views/popUpView";
import { renderCurrentYear } from "./views/copyRightView";

const init = function () {
  model.meteorsInitPos(dom.blueMeteor, dom.yellowMeteor);
  meteor.mouseDown();
  meteor.moveMouse(model.moveMeteors);
  meteor.mouseUp(
    model.restoreMeteorInitPos,
    model.meteorsDroppedTiles,
    model.turnManager,
    model.loseConditoin
  );
  turns.requiredMeteors(
    model.meteorsNum,
    model.turnsCount,
    meteor.meteorsCounter
  );
  renderCurrentYear(model.getYear);
};

init();
