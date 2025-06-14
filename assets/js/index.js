// Створити числовий масив та проініціалізувати його (*випадковими числами).
const numbers = [];
const NUMBERS_COUNT = 20;

for (let i = 0; i < NUMBERS_COUNT; i++) {
    numbers.push(Math.trunc(Math.random() * 100));
}

console.log(numbers);
