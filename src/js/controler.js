import * as model from "./model";
import * as meteor from "./views/meteorsView";
import dom from "./views/DOM";

const Init = function () {
  model.meteorsInitPos(dom.blueMeteor, dom.yellowMeteor);
  meteor.mouseDown();
  meteor.moveMouse(model.moveMeteors);
  meteor.mouseUp(model.restoreMeteorInitPos, model.meteorsDroppedTiles);
};

Init();
