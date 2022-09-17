import {
  random, answer, correctAnswer, opposite, errorMessage, congratulations,
} from '../../src/index.js';

// Условия игры:
export const evenGameConditions = () => {
  const evenCondition = console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return evenCondition;
};

// Движок:
export const gameLogic = () => {
  for (let i = 0; i < 3; i += 1) {
    const multNumber = 10;
    const pushNumber = random(multNumber);
    console.log('Questions: ', pushNumber);
    const pushAnswer = answer();

    const checking1 = (pushNumber % 2 === 0) && (pushAnswer === 'yes');
    const checking2 = (pushNumber % 2 !== 0) && (pushAnswer === 'no');
    if (checking1 === true || checking2 === true) {
      correctAnswer();
    } else if (pushAnswer !== ('yes' || 'no')) {
      return opposite(errorMessage());
    }
  }
  return congratulations();
};
