import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = ('What is the result of the expression?');
const operators = ['+', '-', '*'];
const minRange = 1;
const maxRange = 100;
const minIndex = 0;
const maxIndex = 2;

const calculate = (one, two, operator) => {
  switch (operator) {
    case '+':
      return one + two;
    case '-':
      return one - two;
    case '*':
      return one * two;
    default:
      return null;
  }
};

const getData = () => {
  const randomNumberOne = getRandomNumber(minRange, maxRange);
  const randomNumberTwo = getRandomNumber(minRange, maxRange);
  const randomOperator = operators[getRandomNumber(minIndex, maxIndex)];
  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const correctAnswer = calculate(randomNumberOne, randomNumberTwo, randomOperator);
  const result = [String(question), String(correctAnswer)];
  return result;
};

const runCalc = () => {
  run(description, getData);
};

export default runCalc;
