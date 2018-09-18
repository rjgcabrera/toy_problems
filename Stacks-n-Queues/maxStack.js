class maxStack {
  constructor() {
    this._storage = [];
    this._maxStorage = [];
  }

  pop() {
    let tmp = this._storage.pop();
    if (this._maxStorage.length !== 0 && tmp === this._maxStorage[this._maxStorage.length - 1]) {
      this._maxStorage.pop();
    }
    return tmp;
  }

  push(val) {
    if (this._maxStorage.length === 0 || val > this._maxStorage[this._maxStorage.length - 1]) {
      this._maxStorage.push(val);
    }
    this._storage.push(val);
  }

  getMin() {
    if (this._maxStorage.length === 0) {
      return null;
    } else {
      return this._maxStorage[this._maxStorage.length - 1];
    }
  }
}
