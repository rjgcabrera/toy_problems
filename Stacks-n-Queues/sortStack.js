class sortStack {
  constructor() {
    this._storage = [];
    this._revOrderStorage = [];
    this._maxElemStorage = [];
  }

  push(elem) {
    if (elem > this.peek()) {
      this._maxElemStorage.push(elem);
      for (let i = 0; i < this._storage.length; i++) {
        this._revOrderStorage.push(this._storage.pop());
      }
      for (let j = 0; j < this._revOrderStorage.length; j++) {
        this._maxElemStorage.push(this._revOrderStorage.pop());
      }
      this._storage = JSON.parse(JSON.stringify(this._maxElemStorage));
      this._maxElemStorage = [];
    } else {
      this._storage.push(elem);
    }
  }

  pop() {
    if (!this.isEmpty()) {
      return this._storage.pop();
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this._storage[this._storage - 1];
    }
  }

  isEmpty() {
    return this._storage.length === 0;
  }
}
