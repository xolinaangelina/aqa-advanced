// Додавання та видалення властивостей об'єкта

const person = {
  firstName: 'Angelina',
  lastName: 'Khimich',
  age: 20
};

// Додаємо email
person.email = 'angelina@example.com';

// Видаляємо age
delete person.age;

console.log(person);