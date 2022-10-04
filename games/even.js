import processTheTask from '../src/index.js';
import getRandom from '../src/utils.js';

const description = ('Answer "yes" if the number is even, otherwise answer "no".');

export const getTask = () => {
  const question = getRandom(1, 100);
  const correctAnswer = (question % 2 === 0 ? 'yes' : 'no');
  const result = [question, correctAnswer];

  return result;
};

const startEven = () => processTheTask(description, getTask);

export default startEven;
