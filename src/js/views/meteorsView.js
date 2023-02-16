import view from "./view";

class meteorsView extends view {
  _isHolding;
  getMeteors() {
    const blueMeteor = this._blueMeteor;
    const yellowMeteor = this._yellowMeteor;
    return [blueMeteor, yellowMeteor];
  }
  #holdingMouse() {
    this._isHolding = true;
  }
  releaseMouse(handler, targetTile) {
    document.addEventListener("mouseup", (e) => {
      this._isHolding = false;
      if (e.target === this._blueMeteor || e.target === this._yellowMeteor) {
        targetTile(e.target, this._firstTile);
      }
      handler(this._blueMeteor, this._yellowMeteor);
    });
  }
  AddHandlerMove(handler) {
    document.addEventListener("mousedown", this.#holdingMouse.bind(this));

    document.addEventListener("mousemove", (e) => {
      if (!this._isHolding) return;
      const meteor = e.target.closest(".meteor");
      if (!meteor) return;
      handler(meteor, e);
    });
  }
}

export default new meteorsView();
