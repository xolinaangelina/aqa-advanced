const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function createPost() {
  const newPost = {
    title: 'My test post',
    body: 'This is a test body',
    userId: 1,
  };

  const response = await axios.post(`${BASE_URL}/posts`, newPost);

  // JSONPlaceholder повертає 201 при створенні
  console.assert(response.status === 201, `❌ Очікувався статус 201, отримано: ${response.status}`);

  const created = response.data;

  // Перевірка що сервер повернув наші дані + згенерував id
  console.assert(created.title === newPost.title, '❌ title не співпадає');
  console.assert(created.body === newPost.body, '❌ body не співпадає');
  console.assert(created.userId === newPost.userId, '❌ userId не співпадає');
  console.assert(typeof created.id === 'number', '❌ id має бути числом');

  console.log('✅ task4 POST /posts — пройшло успішно');
  console.log(`   Створений пост з id: ${created.id}`);
}

createPost().catch(console.error);