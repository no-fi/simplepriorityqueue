# Simple Priority Queue

A simple Javascript priority queue implemented with a binary heap.

## Usage:

First import:
```
PriorityQueue = require('PriorityQueue');
```

Then use new to create an empty PriorityQueue:
```
var queue = new PriorityQueue();
```

Currently supports insert, pop, and peek and has a length property:
```
var queue.insert(12, 'foo');
console.log(queue.length); // prints 1
var queue.insert(-5, 'bar');
console.log(queue.peek()); // prints 'bar' does not change length
console.log(queue.length); // prints 2
console.log(queue.pop());  // prints 'bar'
console.log(queue.length); // prints 1
console.log(queue.pop());  // prints 'foo'
console.log(queue.length); // prints 0
```

Attempting to pop or peek an empty PriorityQueue returns undefined.
