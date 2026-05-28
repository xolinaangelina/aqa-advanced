const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Тест 1: POST з валідними даними + перевірка headers
async function createPostWithHeaders() {
  const newPost = {
    title: 'Header check post',
    body: 'Checking content-type header',
    userId: 2,
  };

  const response = await axios.post(`${BASE_URL}/posts`, newPost, {
    headers: { 'Content-Type': 'application/json' },
  });

  console.assert(response.status === 201, `❌ Статус: ${response.status}`);

  // Перевірка content-type у відповіді
  const contentType = response.headers['content-type'];
  console.assert(
    contentType.includes('application/json'),
    `❌ Content-Type має бути application/json, отримано: ${contentType}`
  );

  console.log('✅ task5 (тест 1) POST з headers — пройшло успішно');
  console.log(`   Content-Type відповіді: ${contentType}`);
}

// Тест 2: GET неіснуючого ресурсу — очікуємо 404
async function getNonExistentPost() {
  try {
    await axios.get(`${BASE_URL}/posts/99999`);
    console.log('❌ Мав бути 404, але запит пройшов');
  } catch (error) {
    console.assert(
      error.response.status === 404,
      `❌ Очікувався 404, отримано: ${error.response.status}`
    );
    console.log('✅ task5 (тест 2) GET неіснуючого посту — коректно повернув 404');
  }
}

async function run() {
  await createPostWithHeaders();
  await getNonExistentPost();
}

run().catch(console.error);