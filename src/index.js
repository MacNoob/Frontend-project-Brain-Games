import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the brain games!');
};

export const acquaintance = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

export function getRandomInt(min, max) {
  const randomNumber = min + Math.floor(Math.random() * (max - min + 1));
  return randomNumber;
}

export const randomOperation = () => {
  const subtraction = '-';
  const addition = '+';
  const multiplication = '*';
  const randomIndex = Math.floor(Math.random() * 3);
  const randomize = [subtraction, multiplication, addition];
  return console.log(randomize(randomIndex));
};
