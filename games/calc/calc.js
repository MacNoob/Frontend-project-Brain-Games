import gameEngine from '../../src/index.js';

import getRandom from '../../src/randomNumber.js';

const description = ('What is the result of the expression?');

const getRandomTry = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let question;
let correctAnswer;
const task = () => {
  for (let i = 0; i < 3; i += 1) {
    let randomNumber = getRandomTry(1, 4);
    const randomNumberOne = getRandom();
    const randomNumberTwo = getRandom();
    const quest1 = `${randomNumberOne} + ${randomNumberTwo}`;
    const quest2 = `${randomNumberOne} - ${randomNumberTwo}`;
    const quest3 = `${randomNumberOne} * ${randomNumberTwo}`;
    switch (randomNumber) {
      case randomNumber = 1:
        correctAnswer = randomNumberOne + randomNumberTwo;
        question = `${quest1}`;
        break;
      case randomNumber = 2:
        correctAnswer = randomNumberOne - randomNumberTwo;
        question = `${quest2}`;
        break;
      case randomNumber = 3:
        correctAnswer = randomNumberOne * randomNumberTwo;
        question = `${quest3}`;
        break;
      default:
    }
  }
  const result = [question, String(correctAnswer)];
  return result;
};

getRandomTry(1, 4);

const gameCalcStart = () => gameEngine(description, task);

export default gameCalcStart;
