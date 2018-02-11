var side1 = Number(prompt("Please enter the lenght of the first side."));
var side2 = Number(prompt("Please enter the lenght of the first side."));
var side3 = Number(prompt("Please enter the lenght of the first side."));
var triangleType;

if ((side1 * side1 + side2 * side2 == side3 * side3) || (side1 * side1 + side3 * side3 == side2 * side2) || (side3 * side3 + side2 * side2 == side1 * side1)) {
  triangleType = "right";
} else if (side1 == side2 && side2 == side3) {
  triangleType = "equilateral";
} else if (side1 == side2 || side1 == side3 || side2 == side3) {
  triangleType = "isosceles";
} else {
  triangleType = "scalene";
}

if (!(isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1)) {
  var perimeter = (side1 + side2 + side3) / 2;
  var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
  console.log("Type of triangle is " + triangleType + " triangle and it square is  " + parseFloat(area.toFixed(2)));
} else {
  console.log("Incorrect data!");
}
