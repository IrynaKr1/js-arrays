console.group('З використанням циклів: ');
console.group('Числовий масив, ініціалізація, розимір та копія');
// Створити числовий масив та проініціалізувати його (*випадковими числами).
const numbers = [];
const NUMBERS_COUNT = 10;

for (let i = 0; i < NUMBERS_COUNT; i++) {
  numbers.push(Math.trunc(Math.random() * 100));
}

console.log(numbers);

// Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.

console.log('Видалити останній елемент з масиву: ', numbers.pop());
console.log('Видалити початковий елемент з масиву: ', numbers.shift());
numbers.unshift(1);
console.log('Додати елемент до початку', numbers);
numbers.push(2);
console.log('Додати елемент до кінця', numbers);

// Вивести розмір масиву.
console.log('Розмір масиву: ', numbers.length);

//Зробити копію масиву.
const newNumbers = [...numbers];
console.log('Копія: ', newNumbers);

console.groupEnd();

console.group('Ітерація через масив за допомогою циклів');

//Вивести елементи з парними індексами.
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    console.log(`Індекс ${i}: ${numbers[i]}`);
  }
}

// Знайти добуток елементів масиву

const indexMultiplication = (numbers) => {
  let multipResult = 1;
  for (let i = 0; i < numbers.length; i++) {
    multipResult *= numbers[i];
  }
  return multipResult;
};

console.log('indexMultiplication', indexMultiplication(numbers));

console.groupEnd();
console.groupEnd();

console.group('З використанням методів перебору масивів: ');

// Отримати новий масив із заданого, який міститиме лише ненульові числа

const numbersWithZero = [-1, 5, 0, 9, -10];
const filtered = numbersWithZero.filter((n) => n !== 0);
console.log(filtered);

// Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100

const numbersMap = numbers.map((n) => n / 100);
console.log(numbersMap);

// Вивести елементи масиву, зведені у куб
numbers.forEach((n) => console.log(n ** 3));

// Визначити індекс елемента, квадрат якого дорівнює 100, 
// і видалити його, або видати діагностичне повідомлення, 
// якщо такого елементу не існує.

const numberIndex = numbers.findIndex (n => n ** 2 === 100);

if (numberIndex !== -1) {
    numbers.splice(numberIndex, 1);
} else {
    console.log('Такого елементу не існує');
}
// Перевірити, чи всі елементи масиву є парними числами
console.log('чи всі елементи масиву є парними числами', numbers.every(n => n%2 ===0));

// Перевірити, чи є у масиві бодай один від'ємний елемент
console.log("чи є у масиві бодай один від'ємний елемент", numbersWithZero.some(n => n < 0));

console.groupEnd();
