// Створити числовий масив та проініціалізувати його (*випадковими числами).
const numbers = [];
const NUMBERS_COUNT = 20;

for (let i = 0; i < NUMBERS_COUNT; i++) {
    numbers.push(Math.trunc(Math.random() * 100));
}

console.log(numbers);

// Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.

console.log('Видалити останній елемент з масиву: ', numbers.pop());
console.log('Видалити початковий елемент з масиву: ', numbers.shift());
numbers.unshift(452);
console.log('Додати елемент до початку', numbers);
numbers.push(678);
console.log('Додати елемент до кінця', numbers);