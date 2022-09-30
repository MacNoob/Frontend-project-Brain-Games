import getRandom from '../../src/randomNumber.js';
import gameEngine from '../../src/index.js';

const description = ('Find the greatest common divisor of given numbers.');

const task = () => {
  let temp;
  let randomNumberOne = getRandom();
  let randomNumberTwo = getRandom();
  const question = [`${randomNumberOne} ${randomNumberTwo}`];
  while (randomNumberOne !== randomNumberTwo) {
    if (randomNumberOne > randomNumberTwo) {
      randomNumberOne -= randomNumberTwo;
    } else
    if (randomNumberOne < randomNumberTwo) {
      temp = randomNumberOne;
      randomNumberOne = randomNumberTwo;
      randomNumberTwo = temp;
    }
  }
  const correctAnswer = randomNumberOne;
  const result = [question, String(correctAnswer)];

  return result;
};

const gameGcdStart = () => gameEngine(description, task);

export default gameGcdStart;
