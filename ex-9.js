// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here

// Find studentsScore's Average.
let totalSum = 0;
let totalStudent = 0;
for (key in studentsScore) {
  totalStudent++;
  totalSum+= studentsScore[key];
}
console.log("Average score is " + (totalSum / totalStudent));

// Find the higest score.
let highestName = '';
let highestScore = 0;
for (key in studentsScore) {
  if (studentsScore[key] > highestScore) {
    highestScore = studentsScore[key];
    highestName = key;
  }
}
console.log(`${highestName} has the highest score, which is ${highestScore} points.`)

// Find the lowest score.
let lowestName = '';
let lowestScore = 100;
for (key in studentsScore) {
  if (studentsScore[key] < lowestScore) {
    lowestScore = studentsScore[key];
    lowestName = key;
  }
}
console.log(`${lowestName} has the lowest score, which is ${lowestScore} points.`)