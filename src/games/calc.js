import getRandomNumber from '../utils.js';

export const description = ('What is the result of the expression?');

let correctAnswer;
let question;
export const calculate = () => {
  const randomNumberOne = getRandomNumber(1, 100);
  const randomNumberTwo = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * operators.length);
  switch (randomNumber) {
    case operators.indexOf('+'):
      correctAnswer = randomNumberOne + randomNumberTwo;
      question = `${randomNumberOne} ${operators[0]} ${randomNumberTwo}`;
      break;
    case operators.indexOf('-'):
      correctAnswer = randomNumberOne - randomNumberTwo;
      question = `${randomNumberOne} ${operators[1]} ${randomNumberTwo}`;
      break;
    case operators.indexOf('*'):
      correctAnswer = randomNumberOne * randomNumberTwo;
      question = `${randomNumberOne} ${operators[2]} ${randomNumberTwo}`;
      break;
    default:
      break;
  }
  return [question, String(correctAnswer)];
};

export const getTask = () => {
  const result = calculate();

  return result;
};
