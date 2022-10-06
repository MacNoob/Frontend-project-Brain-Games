import getRandomNumber from '../utils.js';

export const description = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const primeNumber = (number) => {
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

export const getTask = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = primeNumber(question) ? 'yes' : 'no';
  const result = [question, correctAnswer];

  return result;
};
