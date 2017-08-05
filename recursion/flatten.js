function flatten(arr) {
  var result = [];
  var recursion = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        result.push(arr[i]);
      } else {
        result.concat(recursion(arr[i]));
      }
    }
  };
  recursion(arr);
  return result;
};
