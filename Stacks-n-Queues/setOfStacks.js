class setOfStacks {
  constructor(capacityPerStack) {
    this._storage = [];
    this.capacityPerStack = capacityPerStack;
    // this._lastStackIdx = this._storage
  }

  pop() {
    let lastStackIdx = this._storage.length - 1;
    let returnElem;
    if (this._storage.length > 0) {
      returnElem = this._storage[lastStackIdx].pop();
      if (this._storage[lastStackIdx].length === 0) {
        this._storage.pop();
      }
    }
    return returnElem;
  }

  push(elem) {
    let lastStackIdx = this._storage.length - 1;
    if (this._storage[lastStackIdx].length < this.capacityPerStack) {
      this._storage[lastStackIdx].push(elem);
    } else {
      this._storage.push([elem]);
    }
  }
}
