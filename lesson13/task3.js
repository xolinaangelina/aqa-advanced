const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getPostComments() {
  const postId = 1;
  const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);

  console.assert(response.status === 200, `❌ Статус: ${response.status}`);
  console.assert(Array.isArray(response.data), '❌ Data має бути масивом');
  console.assert(response.data.length > 0, '❌ Масив коментарів порожній');

  // Перевірка структури кожного коментаря
  response.data.forEach((comment, index) => {
    console.assert('id' in comment, `❌ Коментар ${index}: відсутнє поле id`);
    console.assert('postId' in comment, `❌ Коментар ${index}: відсутнє поле postId`);
    console.assert('name' in comment, `❌ Коментар ${index}: відсутнє поле name`);
    console.assert('email' in comment, `❌ Коментар ${index}: відсутнє поле email`);
    console.assert('body' in comment, `❌ Коментар ${index}: відсутнє поле body`);

    // Всі коментарі мають належати до нашого поста
    console.assert(comment.postId === postId, `❌ Коментар ${index} належить до postId=${comment.postId}`);
  });

  console.log('✅ task3 GET /posts/1/comments — пройшло успішно');
  console.log(`   Кількість коментарів: ${response.data.length}`);
}

getPostComments().catch(console.error);