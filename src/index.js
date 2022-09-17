import readlineSync from 'readline-sync';

// Знакомство;
export const acquaintance = () => {
  console.log('Welcome to the brain games!');
};

// Переменная кот. будет хранить имя игрока;
let userName;

// Получение имени игрока;
export const getName = () => {
  userName = readlineSync.question('May I have your name? ');
};

// Приветствие игрока по имени;
export const greeting = () => {
  console.log(`Hello, ${userName}`);
};

// Генерация рандомного числа от 0 до 10;
export const random = (number) => {
  const randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
};

// Получение ответа игрока;
let userAnswer;
export const answer = () => {
  userAnswer = readlineSync.question('You answer: ');
};

// Функция для использования в случае корректного ответа:
export const correctAnswer = () => {
  console.log('Correct!');
};

// Проверка условия для even:
export const opposite = () => (answer === 'yes' ? 'no' : 'yes');

// Сообщение об ошибочном ответе:
export const errorMessage = () => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${opposite()}'. \n Let's try again, ${userName}!`);
};

// Поздравление игрока:
export const congratulations = () => console.log(`Congratulations, ${userName}!`);
