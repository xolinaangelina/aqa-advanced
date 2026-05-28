const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getPosts() {
  const response = await axios.get(`${BASE_URL}/posts`);

  // Перевірка статусу
  console.assert(response.status === 200, `❌ Очікувався статус 200, отримано: ${response.status}`);

  // Перевірка що data — масив
  console.assert(Array.isArray(response.data), '❌ Data має бути масивом');

  // Перевірка кількості постів (має бути 100)
  console.assert(response.data.length === 100, `❌ Очікувалось 100 постів, отримано: ${response.data.length}`);

  // Перевірка структури першого елемента
  const firstPost = response.data[0];
  console.assert('id' in firstPost, '❌ Відсутнє поле id');
  console.assert('title' in firstPost, '❌ Відсутнє поле title');
  console.assert('body' in firstPost, '❌ Відсутнє поле body');
  console.assert('userId' in firstPost, '❌ Відсутнє поле userId');

  console.log('✅ task1 GET /posts — пройшло успішно');
  console.log(`   Кількість постів: ${response.data.length}`);
}

getPosts().catch(console.error);