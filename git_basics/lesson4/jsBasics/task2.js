const person1 = 'Angelina';
const person2 = 'Radmila';

// Спосіб 1 — Конкатенація рядків
const greeting1 = 'Привіт, ' + person1 + ' та ' + person2 + '!';
console.log('Конкатенація:', greeting1);

// Спосіб 2 — Шаблонний рядок (template literal)
const greeting2 = `Привіт, ${person1} та ${person2}!`;
console.log('Шаблонний рядок:', greeting2);