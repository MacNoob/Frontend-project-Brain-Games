import gameEngine from '../../src/index.js';

import getRandom from '../../src/randomNumber.js';

const description = ('What is the result of the expression?');

let question;
let correctAnswer;

const task = () => {
  const randomNumberOne = getRandom();
  const randomNumberTwo = getRandom();
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

const gameCalcStart = () => gameEngine(description, task);

export default gameCalcStart;
