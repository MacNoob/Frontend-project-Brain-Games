import getRandomNumber from '../utils.js';

export const description = ('Find the greatest common divisor of given numbers.');
export const getTask = () => {
  let temp;
  let randomNumberOne = getRandomNumber(1, 100);
  let randomNumberTwo = getRandomNumber(1, 100);
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
