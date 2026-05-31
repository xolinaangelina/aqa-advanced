const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('POST /posts', () => {
  let response;
  const newPost = {
    title: 'My test post',
    body: 'This is a test body',
    userId: 1,
  };

  beforeAll(async () => {
    response = await axios.post(`${BASE_URL}/posts`, newPost);
  });

  test('статус має бути 201', () => {
    expect(response.status).toBe(201);
  });

  test('title має співпадати з відправленим', () => {
    expect(response.data.title).toBe(newPost.title);
  });

  test('body має співпадати з відправленим', () => {
    expect(response.data.body).toBe(newPost.body);
  });

  test('сервер має повернути згенерований id', () => {
    expect(typeof response.data.id).toBe('number');
  });
});