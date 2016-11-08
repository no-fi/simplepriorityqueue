function PriorityQueue() {
  this._storage = [];
  this.length = 0;
}

PriorityQueue.prototype.insert = function (key, value) {
  this._storage.push({
    key: key,
    value: value,
  });
  this.length = this._storage.length;
};

module.exports = PriorityQueue;
