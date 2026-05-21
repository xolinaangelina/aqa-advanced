//Масив об'єктів з for...of та деструктуризацією

const users = [
  { name: "Angelina", email: "angelina@example.com", age: 20 },
  { name: "John", email: "john@example.com", age: 25 },
  { name: "Maria", email: "maria@example.com", age: 30 },
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
