//Об'єднання об'єктів через spread

const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

const car2 = {
  brand: "BMW",
  model: "X5",
  owner: "John",
};

const car3 = { ...car1, ...car2 };

console.log(car3);
