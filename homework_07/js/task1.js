var level = Number(prompt("Please enter the number from 1 to 20"));
var space = "   ";
var brick = "[~]";
var newLine = "\n";
var pyramid = "";

if (isNaN(level) || level <= 0 || level > 20 || !Number.isInteger(level)) {
  console.error("You've entered incorrect data!");
} else {
  for (var i = 1; i <= level; i++) {
    for (var j = i; j < level; j++) {
      pyramid += space;
    }
    for (var k = 1; k < (i * 2); k++) {
      pyramid += brick;
    }
    pyramid += newLine;
  }
  console.log(pyramid);
}
