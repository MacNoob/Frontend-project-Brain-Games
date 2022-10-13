import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = ('Answer "yes" if given number is prime. Otherwise answer "no".');
const minRange = 2;
const maxRange = 100;
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getData = () => {
  const question = getRandomNumber(minRange, maxRange);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const result = [String(question), String(correctAnswer)];

  return result;
};

const runPrime = () => {
  run(description, getData);
};

export default runPrime;
