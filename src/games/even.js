import getRandomNumber from '../utils.js';

export const description = ('Answer "yes" if the number is even, otherwise answer "no".');

export const getTask = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = (question % 2 === 0 ? 'yes' : 'no');
  const result = [question, correctAnswer];

  return result;
};
