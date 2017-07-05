function Queue(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this.count() < this.capacity) {
    this.storage[this.tail] = value;
    this.tail++;
    return this.count();
  } else {
    return 'Queue is full!';
  }
};

Queue.prototype.dequeue = function() {
  var value = this.storage[this.head];
  delete this.storage[this.head];
  if (this.head < this.tail) {
    this.head++;
  }
  return value;
};

Queue.prototype.peek = function() {
  return this.storage[this.head];
};

Queue.prototype.count = function() {
  return this.tail - this.head;
};

Queue.prototype.contains = function(value) {
  for (var i in this.storage) {
    if (this.storage[i] === value) {
      return true;
    }
  }
  return false;  
}
