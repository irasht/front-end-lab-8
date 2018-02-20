function collectIds(arr) {
  let result = getFilteredArray(arr, function(n) {
    return n.rating > 3.0;
  });
  return getTransformedArray(result, function(n) {
    return n.id;
  });
}
