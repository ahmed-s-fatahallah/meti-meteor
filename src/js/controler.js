import * as model from "./model";
import meteorsView from "./views/meteorsView";
import view from "./views/view";

const Init = function () {
  model.meteorsInitPos(...meteorsView.getMeteors());
  meteorsView.AddHandlerMove(model.moveMeteors);
  meteorsView.releaseMouse(model.restoreMeteorInitPos, model.targetTile);
};

Init();
