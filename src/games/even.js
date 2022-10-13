import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = ('Answer "yes" if the number is even, otherwise answer "no".');
const minRange = 1;
const maxRange = 100;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const getData = () => {
  const question = getRandomNumber(minRange, maxRange);
  const correctAnswer = isEven(question);
  const result = [String(question), String(correctAnswer)];

  return result;
};

const runEven = () => {
  run(description, getData);
};

export default runEven;
