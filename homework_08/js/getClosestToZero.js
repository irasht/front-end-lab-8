function getClosestToZero() {
  let closestToZero = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (Math.abs(closestToZero) > Math.abs(arguments[i])) {
      closestToZero = arguments[i];
    }
  }
  return closestToZero;
}
