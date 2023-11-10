// queue implementation in javascript
// https://www.geeksforgeeks.org/implementation-queue-javascript/
// To implement a queue data structure we need the following methods:

// enqueue : To add elements at end of the queue.
// dequeue: To remove an element from the front of the queue.
// peek: To get the front element without removing it.
// isEmpty: To check whether an element is present in the queue or not.
// printQueue: To print the elements present in queue.

// program to implement queue data structure
// class Queue {
//     constructor() {
//         this.items = {};
//         this.headIndex = 0;
//         this.tailIndex = 0;
//     }

//     //adds a new element
//     enqueue(element) {
//         this.items[this.tailIndex] = element;
//         this.tailIndex++;
//     }

//     //removes an element from head of the queue
//     dequeue() {
//         let removedElement = this.items[this.headIndex];
//         delete this.items[this.headIndex];
//         this.headIndex++;
//         return removedElement;
//     }

//     //shows the head element of the  queue
//     peek() {
//         let peekElement = this.items[this.headIndex];
//         return peekElement;
//     }

//     //shows the number of items in queue
//     size() {
//         return this.tailIndex - this.headIndex;
//     }

//     //checks if queue is empty or not
//     isEmpty() {
//         if (this.tailIndex - this.headIndex == 0) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     //empty the queue
//     clear() {
//         this.items = {};
//         this.headIndex = 0;
//         this.tailIndex = 0;
//     }
// }
// let queue = new Queue();

// add items to queue
// queue.enqueue(8);
// queue.enqueue(6);
// queue.enqueue(4);
// queue.enqueue(2);

// console.log("Queue after adding items: ");
// console.log(queue.items);

// remove the first item
//queue.dequeue();

//console.log("Queue after deleting the first item:");
//console.log(queue.items);

// show the first item
//console.log("First item of the queue = " + queue.peek());

// empty the queue
//queue.clear();

//console.log("After clearing the queue: ");
//console.log(queue.items);

//list - can be an object or an array no problem//
//when array isused in queue operation O(n)
//when obj/map isused in queue operation O(1)

// class Queue {
//   constructor() {
//     (this.list = {}), (this.headIndex = 0), (this.tailIndex = 0);
//   }
//   enqueue(element) {
//     this.list[this.tailIndex] = element;
//     this.tailIndex++;
//   }
//   dequeue() {
//     let removedElement = this.list[this.headIndex];
//     delete this.list[this.headIndex];
//     this.headIndex++;
//   }
//   clear() {
//     this.list = {};
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }
//   peek() {
//     let firstElement = this.list[this.headIndex];
//     return firstElement;
//   }
//   isEmpty() {
//     if (this.tailIndex - this.headIndex === 0) {
//       return true;
//     }
//   }
//   printQueue() {
//     return this.list
//   }
// }

// let trimmer = new Queue();
// trimmer.enqueue(1);
// trimmer.enqueue(10);
// trimmer.enqueue(100);
// trimmer.enqueue(1000);
// trimmer.enqueue(10000);
// console.log(trimmer.printQueue());
// trimmer.dequeue();
// trimmer.dequeue();
// trimmer.enqueue(987)
// console.log(trimmer.printQueue());

//circular queue
//when the maximum size of queue is fixed, circular queue is perfect choice;
//two main operation of circular queue
// Enqueue and Dequeue
//enqueue --  add element to tail of array
//dequeue -- remove element from first of array

//other supplementary operations
//isFull()
//isEmpty()
//size(),peek()
//print()

//circular queue - implementation
class CircularQueue {
  constructor(size) {
    this.items = [];
    this.size = size;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isEmpty() {
    if (this.currentLength === 0) return true;
  }
  isFull() {
    if (this.currentLength === this.size) return true;
  }
  enqueue(element) {
    if (!this.isFull) {
      this.rear = this.rear % this.size;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front += 1;
    this.currentLength -= 1;
    if (this.isEmpty) {
      this.front = -1;
      this.rear = -1;
    }
    return this.items;
  }
}

// class CircularQueue {
//   constructor(size) {
//     this.element = [];
//     this.size = size;
//     this.length = 0;
//     this.front = 0;
//     this.back = -1;
//   }
//   isEmpty() {
//     return this.length == 0;
//   }
//   enqueue(element) {
//     if (this.length >= this.size) throw new Error("Maximum length exceeded");
//     this.back++;
//     this.element[this.back % this.size] = element;
//     this.length++;
//   }
//   dequeue() {
//     if (this.isEmpty()) throw new Error("No elements in the queue");
//     const value = this.getFront();
//     this.element[this.front % this.size] = null;
//     this.front++;
//     this.length--;
//     return value;
//   }
//   getFront() {
//     if (this.isEmpty()) throw new Error("No elements in the queue");
//     return this.element[this.front % this.size];
//   }
//   clear() {
//     this.element = new Array();
//     this.length = 0;
//     this.back = 0;
//     this.front = -1;
//   }
// }

// let cq = new CircularQueue(20);
// cq.enqueue(10);
// cq.enqueue(100);
// cq.enqueue(1000);
// cq.dequeue();
// console.log(cq.getFront())
