function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var swapped = false;
    for (var j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j-1]) {
        var temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
};
