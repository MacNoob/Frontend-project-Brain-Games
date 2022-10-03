import gameEngine from '../../src/index.js';

const description = ('Answer \'yes\' if given number is prime. Otherwise answer \'no\'.');

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + max);

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

export const task = () => {
  const question = randomNumber(2, 100);
  const correctAnswer = primeNumber(question) ? 'yes' : 'no';

  const result = [question, correctAnswer];

  return result;
};

const gamePrimeStart = () => gameEngine(description, task);

export default gamePrimeStart;
