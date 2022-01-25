//version 5 -- Includes multiple of 13, print Fezz.
//Printing the number at the start to check

function isDivisable(a, b) {
  if (a % b === 0)
    return true
  else return false;
}

for (i = 1; i <= 200; i++) {
  var results = i + " ";
  if (isDivisable(i, 13))
    results += "Fezz";
  if (isDivisable(i, 11))
    results += "Bong";
  else {
    if (isDivisable(i, 3))
      results += "Fizz";
    if (isDivisable(i, 5))
      results += "Buzz";
    if (isDivisable(i, 7))
      results += "Bang";
    if (results === "")
      results += i;
  }
  console.log(results);
}


