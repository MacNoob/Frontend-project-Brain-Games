import {
  random, answer, correctAnswer, opposite, errorMessage, congratulations, questions,
} from '../../src/index.js';

// Условия игры:
export const evenGameConditions = () => {
  const evenCondition = console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return evenCondition;
};
// Движок
export const gameLogic = () => {
  for (let i = 0; i < 3; i += 1) {
    const pushNumber = random();
    questions(pushNumber);

    const checking1 = (pushNumber % 2 === 0) && (answer() === 'yes');
    const checking2 = (pushNumber % 2 !== 0) && (answer() === 'no');
    if (checking1 === true || checking2 === true) {
      correctAnswer();
    } else if (answer() !== ('yes' || 'no')) {
      return errorMessage();
    } else {
      return opposite(errorMessage());
    }
  }
  return congratulations();
};
