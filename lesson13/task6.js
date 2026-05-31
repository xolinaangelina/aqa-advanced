const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// REQUEST interceptor — логування запиту
axios.interceptors.request.use(
  (config) => {
    console.log('──────────────────────────────────────');
    console.log('📤 REQUEST:');
    console.log(`   Method : ${config.method.toUpperCase()}`);
    console.log(`   URL    : ${config.baseURL || ''}${config.url}`);
    if (config.data) {
      console.log(`   Body   : ${JSON.stringify(config.data)}`);
    }
    console.log(`   Time   : ${new Date().toISOString()}`);
    console.log('──────────────────────────────────────');
    return config;
  },
  (error) => {
    console.error('❌ REQUEST ERROR:', error.message);
    return Promise.reject(error);
  }
);

// RESPONSE interceptor — логування відповіді
axios.interceptors.response.use(
  (response) => {
    console.log('📥 RESPONSE:');
    console.log(`   Status  : ${response.status} ${response.statusText}`);
    console.log(`   URL     : ${response.config.url}`);
    const dataPreview = JSON.stringify(response.data).slice(0, 100);
    console.log(`   Data    : ${dataPreview}...`);
    console.log('──────────────────────────────────────\n');
    return response;
  },
  (error) => {
    console.log('📥 RESPONSE ERROR:');
    console.log(`   Status  : ${error.response?.status}`);
    console.log(`   URL     : ${error.config?.url}`);
    console.log(`   Message : ${error.message}`);
    console.log('──────────────────────────────────────\n');
    return Promise.reject(error);
  }
);


async function run() {
  // 1. GET всіх постів
  const posts = await axios.get(`${BASE_URL}/posts`);
  console.assert(posts.status === 200, '❌ Статус має бути 200');
  console.log(`✅ Тест 1: отримано ${posts.data.length} постів\n`);

  // 2. GET одного поста
  const post = await axios.get(`${BASE_URL}/posts/1`);
  console.assert(post.status === 200, '❌ Статус має бути 200');
  console.log(`✅ Тест 2: отримано пост з id=${post.data.id}\n`);

  // 3. POST створення поста
  const created = await axios.post(`${BASE_URL}/posts`, {
    title: 'Interceptor test post',
    body: 'Testing interceptors',
    userId: 1,
  });
  console.assert(created.status === 201, '❌ Статус має бути 201');
  console.log(`✅ Тест 3: створено пост з id=${created.data.id}\n`);

  // 4. GET неіснуючого ресурсу — перехоплення помилки
  try {
    await axios.get(`${BASE_URL}/posts/99999`);
  } catch (error) {
    console.assert(error.response.status === 404, '❌ Має бути 404');
    console.log(`✅ Тест 4: коректно перехоплено 404\n`);
  }
}

run().catch(console.error);