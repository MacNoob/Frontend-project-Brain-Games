import getRandomNumber from '../utils.js';

export const description = ('What is the result of the expression?');
const operators = ['+', '-', '*'];

export const calculate = () => {
  const randomNumberOne = getRandomNumber(1, 100);
  const randomNumberTwo = getRandomNumber(1, 100);
  const randomOperator = operators[getRandomNumber(0, 2)];
  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  let correctAnswer;
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
  return [question, String(correctAnswer)];
};

export const getTask = () => {
  const result = calculate();

  return result;
};
