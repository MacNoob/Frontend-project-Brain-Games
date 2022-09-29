import gameEngine from '../../src/index.js';

const description = ('What number is missing in the progression?');

const makeProgression = () => {
  const startNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
  let variableOfStartNumber = startNumber(2, 10);

  const multiplier = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const variableOfMultiplier = multiplier(2, 5);

  const quantity = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const variableOfQuantity = quantity(5, 10);

  const arr = [];

  for (let i = 0; i < variableOfQuantity; i += 1) {
    arr.push(variableOfStartNumber);
    variableOfStartNumber += variableOfMultiplier;
  }

  return arr;
};
const task = () => {
  const progress = makeProgression();

  const randomIndex = Math.floor(Math.random() * progress.length);

  const correctAnswer = progress[randomIndex];
  const dot = '..';
  // eslint-disable-next-line no-unused-vars
  const temp = progress[randomIndex];
  progress[randomIndex] = dot;

  const question = progress.join(' ');

  const result = [question, String(correctAnswer)];
  return result;
};

const gameProgressionStart = () => gameEngine(description, task);

export default gameProgressionStart;
