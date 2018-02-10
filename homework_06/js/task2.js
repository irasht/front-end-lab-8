var eur = Number(prompt("Please enter the amount of EURO"));
var usd = Number(prompt("Please enter the amount of USD"));

var rateEurUah = 33.2324;
var rateUsdUah = 27.1240;

if (!(isNaN(eur) || isNaN(usd) || eur <= 0 || usd <= 0)) {
  var resultEUR = eur * rateEurUah;
  let resultUSD = usd * rateUsdUah;
  let eurUsd = rateEurUah / rateUsdUah;

  var eurFormat;
  var usdFormat;

  if (eur > 1) {
    eurFormat = " euros are ";
  } else {
    eurFormat = " euro is ";
  }
  if (usd > 1) {
    usdFormat = " dollars are ";
  } else {
    usdFormat = " dollar is ";
  }
  console.log(eur + eurFormat + "equal " + resultEUR.toFixed(2) + " UAH, " + usd + usdFormat + "equal " + resultUSD.toFixed(2) + " UAH, one euro is equal " + eurUsd.toFixed(2) + " dollars.");
} else {
  console.log("Incorrect data");
}
