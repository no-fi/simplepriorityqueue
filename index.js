function PriorityQueue() {
  this._storage = [];
  this.length = 0;
}

PriorityQueue.prototype.insert = function (key, value) {
  this._storage.push({
    key: key,
    value: value,
  });
  siftUp(this._storage);
  this.length = this._storage.length;
};

PriorityQueue.prototype.peek = function () {
  return this._storage[0] === undefined ? undefined : this._storage[0].value;
};

// Perform a heap siftUp operation on given array in-place
function siftUp(array) {
  var index = array.length - 1;
  while (index > 0) {
    var parentIndex = Math.ceil(index / 2) - 1;
    if (array[index].key >= array[parentIndex].key) {
      return;
    }
    var temp = array[parentIndex];
    array[parentIndex] = array[index];
    array[index] = temp;
    index = parentIndex;
  }
}

module.exports = PriorityQueue;
