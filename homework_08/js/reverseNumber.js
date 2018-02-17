function reverseNumber(number) {
  let revNum = String(Math.abs(number)).split("").reverse().join("");
  return Number(revNum) * Math.sign(number);
}
