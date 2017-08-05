function recursiveMultiplier(arr, num) {
  var i = arr.length - 1;
  var recursion = function(arr, num) {
    if (i >= 0)  {
      arr[i] = arr[i] * num;
      i = i - 1;
      return recursion(arr, num);
    }
  };
  recursion(arr, num);
  return arr;
};
