//Копіювання з мутацією (map)

const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.map((element, index) => element * index);

console.log(newArray);
