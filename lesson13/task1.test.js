const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('GET /posts', () => {
  let response;

  beforeAll(async () => {
    response = await axios.get(`${BASE_URL}/posts`);
  });

  test('статус має бути 200', () => {
    expect(response.status).toBe(200);
  });

  test('data має бути масивом', () => {
    expect(Array.isArray(response.data)).toBe(true);
  });

  test('має повертати 100 постів', () => {
    expect(response.data.length).toBe(100);
  });

  test('кожен пост має поля id, title, body, userId', () => {
    response.data.forEach((post) => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
      expect(post).toHaveProperty('userId');
    });
  });
});