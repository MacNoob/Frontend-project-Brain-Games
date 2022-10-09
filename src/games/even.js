import getRandomNumber from '../utils.js';
import run, { attempsCount } from '../index.js';

const description = ('Answer "yes" if the number is even, otherwise answer "no".');

const runEven = () => {
  let i = 0;
  const task = [];
  for (i = 0; i < attempsCount; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = (question % 2 === 0 ? 'yes' : 'no');
    task.push([question, correctAnswer]);
  }

  run(description, task);
};
export default runEven;
