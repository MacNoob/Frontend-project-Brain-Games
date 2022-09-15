#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the brain games!');
};

export const randomNumber = () => Math.round(Math.random() * 10);

export const evenGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const pushNumber = randomNumber();
    console.log('Question: ', pushNumber);
    const userAnswer = readlineSync.question('You answer: ');

    const checking1 = (pushNumber % 2 === 0) && (userAnswer === 'yes');
    const checking2 = (pushNumber % 2 !== 0) && (userAnswer === 'no');
    if (checking1 === true || checking2 === true) {
      console.log('Correct!');
    } else if (userAnswer !== ('yes' || 'no')) {
      const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
      const errorMessage = `"${userAnswer}" is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${userName}!`;
      return console.log(errorMessage);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
