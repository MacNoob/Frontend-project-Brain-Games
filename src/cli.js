import readlineSync from 'readline-sync';

const greatest = () => {
  console.log('Welcome to the brain games!');
  const getUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUserName}`);
};

export default greatest;
