function getTransformedArray(arr, transform) {
  let result = [];
  forEach(arr, function(n) {
    result.push(transform(n));
  });
  return result;
}
