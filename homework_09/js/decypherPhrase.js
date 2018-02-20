function decypherPhrase(object, string) {
  let newObject = new Object();
  for (let key in object) {
    let value = object[key];
    newObject[value] = key;
  }
  return cypherPhrase(newObject, string);
}
