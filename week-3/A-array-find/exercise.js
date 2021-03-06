/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/
function hasPassed(score) {
  return score > 60;
}
function findLowestPassScore(testScores) {
  testScores.sort((a, b) => a - b);
  return testScores.find(hasPassed);
}

var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = findLowestPassScore(testScores);
console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
