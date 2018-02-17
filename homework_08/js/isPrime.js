function isPrime(primeNumber) {
  if (primeNumber === 1) {
    return false;
  }
  for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i === 0) {
      return false;
    }
  }
  return true;
}
