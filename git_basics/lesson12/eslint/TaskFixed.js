// ✅ AFTER: файл після виправлення ESLint помилок
// Запусти: npm run lint → 0 помилок

// 1. ✅ const замість var
const userName = 'John';
const userAge = 25;

// 2. ✅ Видалено невикористану змінну

// 3. ✅ === замість ==
if (userAge === 25) {
  console.log('Age is 25');
}

// 4. ✅ const для функції, прибрано var
function getUserInfo() {
  const result = `${userName} is ${userAge} years old`;
  console.log(result);
}

// 5. ✅ Скорочена стрілкова функція без зайвого return
const double = (x) => x * 2;

// 6. ✅ const замість let (значення не змінюється)
const pi = 3.14;
console.log(pi);

// 7. ✅ === null замість == null
const data = null;
if (data === null) {
  console.log('No data');
}

getUserInfo();
console.log(double(5));
console.log(userName);
