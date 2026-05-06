//Ділення з валідацією та try/catch

function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Обидва аргументи мають бути числами');
  }
  if (denominator === 0) {
    throw new Error('Ділення на нуль неможливе');
  }
  return numerator / denominator;
}

// Виклик 1 — успішний
try {
  console.log(divide(10, 2));
} catch (error) {
  console.log('Помилка:', error.message);
} finally {
  console.log('Робота завершена');
}

// Виклик 2 — ділення на 0
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log('Помилка:', error.message);
} finally {
  console.log('Робота завершена');
}

// Виклик 3 — не число
try {
  console.log(divide(10, 'abc'));
} catch (error) {
  console.log('Помилка:', error.message);
} finally {
  console.log('Робота завершена');
}