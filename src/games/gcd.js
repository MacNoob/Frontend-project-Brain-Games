import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = ('Find the greatest common divisor of given numbers.');
const minRange = 1;
const maxRange = 100;

const getGCD = function gcd(num1, num2) {
  return num2 ? gcd(num2, num1 % num2) : num1;
};

const getData = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = [`${number1} ${number2}`];
  const correctAnswer = getGCD(number1, number2);
  const result = [String(question), String(correctAnswer)];

  return result;
};

const runGCD = () => {
  run(description, getData);
};

export default runGCD;
