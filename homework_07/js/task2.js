var game = confirm("Do you want to play a game?");
var finalPrize = 0;
var maxNumb = 5;
var maxPrize = 10;
var play = true;

if (!game) {
  console.log('You did not become a millionaire');
} else {
  while (play) {
    var possiblePrize = maxPrize;
    var guess = false;

    for (var i = 3; i > 0; i--) {
      var randomNumb = Math.floor(Math.random() * (maxNumb + 1));
      console.log(randomNumb); //checking work

      var userNumb = Number(
        prompt("Enter a number from 0 to " + maxNumb +
          "\nAttempts left: " + i +
          "\nTotal prize: " + finalPrize + "$" +
          "\nPossible prize on current attempt: " + possiblePrize + "$"));

      if (userNumb == randomNumb) {
        guess = true;
        finalPrize += possiblePrize;
        break;
      } else {
        possiblePrize = Math.floor(possiblePrize / 2);
        if (i == 1) {
          finalPrize = 0;
        }
      }
    }

    if (guess) {
      var continuePlay = confirm('Do you want to continue a game?');
      if (continuePlay) {
        maxNumb *= 2;
        maxPrize *= 3;
      }
    }

    if ((guess && !continuePlay) || !guess) {
      console.log('Thank you for a game. Your prize is: ' + finalPrize + '$');
      var tryAgain = confirm("Do you want to try again?");
      if (!tryAgain) {
        play = false;
        break;
      } else {
        maxNumb = 5;
        finalPrize = 0;
        maxPrize = 10;
      }
    }
  }
}
