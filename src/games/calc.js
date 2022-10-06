import processTheTask from '../index.js';

import getRandom from '../utils.js';

const description = ('What is the result of the expression?');

let question;
let correctAnswer;

const getTask = () => {
  const randomNumberOne = getRandom(1, 100);
  const randomNumberTwo = getRandom(1, 100);
  const operators = ['+', '-', '*'];

  const randomNumber = Math.floor(Math.random() * operators.length);

  if (randomNumber === operators.indexOf('+')) {
    correctAnswer = randomNumberOne + randomNumberTwo;
    question = `${randomNumberOne} ${operators[0]} ${randomNumberTwo}`;
  } else if (randomNumber === operators.indexOf('-')) {
    correctAnswer = randomNumberOne - randomNumberTwo;
    question = `${randomNumberOne} ${operators[1]} ${randomNumberTwo}`;
  } else if (randomNumber === operators.indexOf('*')) {
    correctAnswer = randomNumberOne * randomNumberTwo;
    question = `${randomNumberOne} ${operators[2]} ${randomNumberTwo}`;
  }

  const result = [question, String(correctAnswer)];

  return result;
};

const startCalc = () => processTheTask(description, getTask);

export default startCalc;
