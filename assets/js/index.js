console.group('Числовий масив, ініціалізація, розимір та копія');
// Створити числовий масив та проініціалізувати його (*випадковими числами).
const numbers = [];
const NUMBERS_COUNT = 5;

for (let i = 0; i < NUMBERS_COUNT; i++) {
  numbers.push(Math.trunc(Math.random() * 100));
}

console.log(numbers);

// Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.

console.log('Видалити останній елемент з масиву: ', numbers.pop());
console.log('Видалити початковий елемент з масиву: ', numbers.shift());
numbers.unshift(11);
console.log('Додати елемент до початку', numbers);
numbers.push(11);
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

const indexMultiplication = numbers => {
    let multipResult = 1;
    for (let i = 0; i < numbers.length; i++){
        multipResult *= numbers[i];
    }
    return multipResult;
}

console.log(indexMultiplication(numbers));

console.groupEnd();
