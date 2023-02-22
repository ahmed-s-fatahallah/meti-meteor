import * as model from "./model";
import * as meteor from "./views/meteorsView";
import * as tiles from "./views/tilesView";
import * as turns from "./views/turnsView";
import dom from "./views/DOM";

const Init = function () {
  model.meteorsInitPos(dom.blueMeteor, dom.yellowMeteor);
  meteor.mouseDown();
  meteor.moveMouse(model.moveMeteors);
  meteor.mouseUp(
    model.restoreMeteorInitPos,
    model.meteorsDroppedTiles,
    model.turnManager,
    model.winConditoin
  );
  turns.requiredMeteors(model.meteorsNum, model.turnsCount);
};

Init();
