class minStack {
  constructor() {
    this._storage = [];
    this._minStorage = [];
  }

  pop() {
    let tmp = this._storage.pop();
    if (this._minStorage.length !== 0 && tmp === this._minStorage[this._minStorage.length - 1]) {
      this._minStorage.pop();
    }
    return tmp;
  }

  push(val) {
    if (this._minStorage.length === 0 || val < this._minStorage[this._minStorage.length - 1]) {
      this._minStorage.push(val);
    }
    this._storage.push(val);
  }

  getMin() {
    if (this._minStorage.length === 0) {
      return null;
    } else {
      return this._minStorage[this._minStorage.length - 1];
    }
  }
}
