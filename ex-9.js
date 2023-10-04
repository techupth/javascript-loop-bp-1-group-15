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
//หาค่าเฉลี่ยยยย
let totalScore = 0;
let totalStudents = 0;

for (let student in studentsScore) {
    totalScore = studentsScore[student];
    totalStudents++;
}

let averageScore = totalScore / totalStudents;

console.log(`Average score is ${averageScore}`);

//มากที่สุด
let highestScore = 0;
let highestScoreName = '';

for (let student in studentsScore) {
    if (studentsScore[student] > highestScore) {
        highestScore = studentsScore[student];
        highestScoreName = student;
    }
}

console.log(`${highestScoreName} has the highest score, which is ${highestScore} points.`);

//น้อยที่สุด
let lowestScore = 100;
let lowestScoreName = '';

for (let student in studentsScore) {
    if (studentsScore[student] < lowestScore) {
        lowestScore = studentsScore[student];
        lowestScoreName = student;
    }
}

console.log(`${lowestScoreName} has the lowest score, which is ${lowestScore} points.`);




