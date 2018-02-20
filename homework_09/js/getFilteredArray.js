function predicateFunction(n) {
  return n > 3;
}

function getFilteredArray(arr, predicateFunction) {
  let result = [];
  forEach(arr, function(arr) {
    if (predicateFunction(arr)) {
      result.push(arr);
    }
  });
  return result;
}
