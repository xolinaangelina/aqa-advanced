const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getPostById() {
  const postId = 1;
  const response = await axios.get(`${BASE_URL}/posts/${postId}`);

  console.assert(response.status === 200, `❌ Статус: ${response.status}`);

  const post = response.data;

  // Перевірка типів полів
  console.assert(typeof post.id === 'number', '❌ id має бути числом');
  console.assert(typeof post.userId === 'number', '❌ userId має бути числом');
  console.assert(typeof post.title === 'string', '❌ title має бути рядком');
  console.assert(typeof post.body === 'string', '❌ body має бути рядком');

  // Перевірка що отримали саме потрібний пост
  console.assert(post.id === postId, `❌ Очікувався id=${postId}, отримано: ${post.id}`);

  console.log('✅ task2 GET /posts/1 — пройшло успішно');
  console.log(`   Title: "${post.title}"`);
}

getPostById().catch(console.error);