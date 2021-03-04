/*
 * Program that outputs students overall score and grade
 * Students score , total possible score
 * 15/20 -> You got a C (75%)!
 * A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
 */

const gradeCalc = function (score, totalScore) {
  // This section is the argument
  const percent = (score / totalScore) * 100;
  let letterGrade = '';

  if (percent >= 90) {
    // This is the code that tells the program what to do
    letterGrade = 'A';
  } else if (percent >= 80) {
    letterGrade = 'B';
  } else if (percent >= 70) {
    letterGrade = 'C';
  } else if (percent >= 60) {
    letterGrade = 'D';
  } else letterGrade = 'F';

  return `You got a ${letterGrade} (${percent})%!`; // Where and how the result is returned
};

const result = gradeCalc(19, 20); // Calling the function by referencing it by name
console.log(result); // Console logging the result.
