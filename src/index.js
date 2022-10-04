import readlineSync from 'readline-sync';

const attempsCount = 3;

const processTheTask = (description, getTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(description);

  for (let i = 0; i < attempsCount; i += 1) {
    const [question, correctAnswer] = getTask();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer?: ');

    switch (userAnswer) {
      case correctAnswer:
        console.log('Correct!');
        break;
      default: console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);

        return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default processTheTask;
