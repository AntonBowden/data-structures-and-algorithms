function Stack(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function(value) {
  if (this.count < this.capacity) {
    this.storage[this.count] = value;
    this.count++;
  } else {
    return "Stack is full!";
  }
};

Stack.prototype.pop = function() {
  var value = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return value;
};

Stack.prototype.peek = function() {
  if (this.count === 0) {
    return "Stack is empty!";
  } else {
    return this.storage[this.count - 1];
  }
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.contains = function(value) {
  for (var i in this.storage) {
    if (this.storage[i] === value) {
      return true;
    }
  }
  return false;
};

Stack.prototype.until = function(value) {
  for (var i in this.storage) {
    if (this.storage[i] === value) {
      console.log("Count: " + this.count, "i: " + i);
      return this.count - i;
    }
  }
};
