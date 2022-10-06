import getRandom from '../utils.js';
import processTheTask from '../index.js';

const description = ('Find the greatest common divisor of given numbers.');

const getTask = () => {
  let temp;
  let randomNumberOne = getRandom(1, 100);
  let randomNumberTwo = getRandom(1, 100);
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

const startGcd = () => processTheTask(description, getTask);

export default startGcd;
