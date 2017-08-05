function recursiveReverse(arr) {
  var mid = Math.floor(arr.length / 2);
  var i = 0;
  var recursion = function(arr) {
    if (i < mid) {
      var temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
      i++;
      return recursion(arr);
    }
  }
  recursion(arr);
  return arr;
};
