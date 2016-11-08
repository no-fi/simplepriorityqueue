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

PriorityQueue.prototype.pop = function () {
  var result = this.peek();
  if (this._storage.length !== 0) {
    siftDown(this._storage);
    this.length = this._storage.length;
  }
  return result;
};

// Perform a heap sift-up operation on given array in-place
function siftUp(array) {
  // Start with the very last added heap element
  var index = array.length - 1;
  while (index > 0) {
    // Find parent index of this node
    var parentIndex = Math.ceil(index / 2) - 1;
    // Return if parent and child have proper relationship
    if (array[index].key >= array[parentIndex].key) {
      return;
    }
    // Otherwise "bubble-Up" the element
    var temp = array[parentIndex];
    array[parentIndex] = array[index];
    array[index] = temp;
    // Repeat loop with parent as current Index since we have "bubbled"
    index = parentIndex;
  }
}

// Perform a heap sift-down operation on given array in-place
function siftDown(array) {
  // Remove last added element
  var last = array.pop();
  // Return early if this is the only element in the heap
  if (array.length === 0) {
    return;
  }
  // This element is now the top of the heap
  array[0] = last;
  // Start with top and 'bubble-down'
  var index = 0;
  while (2 * index + 2 < array.length) {
    var childIndex1 = index * 2 + 1;
    var childIndex2 = childIndex1 + 1;
    // If current node is larger than either of it's children, swap with the smallest!
    if (array[childIndex1].key <= array[childIndex2].key) {
      if (array[index].key > array[childIndex1].key) {
        // 'bubble-down' to first child
        var tmp = array[index];
        array[index] = array[childIndex1];
        array[childIndex1] = tmp;
        // repeat process with first child
        index = childIndex1;
      } else {
        // stop as heap property is now satisfied
        return;
      }
    } else {
      if (array[index].key > array[childIndex2].key) {
        // 'bubble-down' to second child
        var tmp = array[index];
        array[index] = array[childIndex2];
        array[childIndex2] = tmp;
        // repeat process with second child
        index = childIndex2;
      } else {
        // stop as heap property is now satisfied
        return;
      }
    }
  }
}

module.exports = PriorityQueue;
