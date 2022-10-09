import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = ('What is the result of the expression?');
const operators = ['+', '-', '*'];
const randomNumberOne = getRandomNumber(1, 100);
const randomNumberTwo = getRandomNumber(1, 100);
const randomOperator = operators[getRandomNumber(0, 3)];
const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
let correctAnswer;

export const calculate = () => {
  switch (randomOperator) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      correctAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo;
      break;
    default:
      break;
  }
  return correctAnswer;
};

const getTask = () => [question, String(calculate(correctAnswer))];

const runCalc = () => run(description, getTask);

export default runCalc;
