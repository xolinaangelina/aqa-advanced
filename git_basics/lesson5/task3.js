const number = 5;

// Цикл for
console.log('--- for ---');
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Цикл while
console.log('--- while ---');
let i = 1;
while (i <= 10) {
  console.log(`${number} x ${i} = ${number * i}`);
  i++;
}