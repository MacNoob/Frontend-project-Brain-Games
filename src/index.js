import readlineSync from 'readline-sync';

const gameEngine = (description, task) => {
  console.log('Welcome to the brain games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = task();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer?: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`);

      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
