function selectionSort(arr) {
  var largest = 0;
  var index = 0;
  for (var i = arr.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > largest) {
        largest = arr[j];
        index = j;
      }
    }
    if (largest > arr[i]) {
      var temp = arr[i];
      arr[i] = largest;
      arr[index] = temp;
      largest = 0;
    }
  }
  return arr;
};
