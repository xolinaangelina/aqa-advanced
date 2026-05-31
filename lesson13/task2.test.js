const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('GET /posts/:id', () => {
  let response;

  beforeAll(async () => {
    response = await axios.get(`${BASE_URL}/posts/1`);
  });

  test('статус має бути 200', () => {
    expect(response.status).toBe(200);
  });

  test('id має бути числом', () => {
    expect(typeof response.data.id).toBe('number');
  });

  test('має повернути пост з id=1', () => {
    expect(response.data.id).toBe(1);
  });

  test('title та body мають бути рядками', () => {
    expect(typeof response.data.title).toBe('string');
    expect(typeof response.data.body).toBe('string');
  });
});