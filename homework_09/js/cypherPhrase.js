function cypherPhrase(object, string) {
  let newString = getTransformedArray(string, function(n) {
    return object[n] || n;
  });
  return newString.join("");
}
