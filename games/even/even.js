import gameEngine from '../../src/index.js';
import getRandom from '../../src/randomNumber.js';

const description = ('Answer "yes" if the number is even, otherwise answer "no".');

export const task = () => {
  const question = getRandom();
  const correctAnswer = (question % 2 === 0 ? 'yes' : 'no');
  const result = [question, correctAnswer];

  return result;
};

const gameEvenStart = () => gameEngine(description, task);
export default gameEvenStart;
