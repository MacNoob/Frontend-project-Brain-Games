import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = ('What number is missing in the progression?');
const minStart = 2;
const maxStart = 10;
const minStep = 2;
const maxStep = 5;
const minLength = 5;
const maxLength = 10;

const getProgression = () => {
  let progressionStart = getRandomNumber(minStart, maxStart);
  const progressionStep = getRandomNumber(minStep, maxStep);
  const progressionLength = getRandomNumber(minLength, maxLength);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart);
    progressionStart += progressionStep;
  }

  return progression;
};
const getData = () => {
  const progress = getProgression();
  const randomIndex = Math.floor(Math.random() * progress.length);
  const correctAnswer = progress[randomIndex];
  const dot = '..';
  // eslint-disable-next-line no-unused-vars
  const temp = progress[randomIndex];
  progress[randomIndex] = dot;
  const question = progress.join(' ');
  const result = [String(question), String(correctAnswer)];

  return result;
};

const runProgression = () => {
  run(description, getData);
};

export default runProgression;
