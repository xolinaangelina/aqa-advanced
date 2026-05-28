const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('GET /posts/1/comments', () => {
  let response;

  beforeAll(async () => {
    response = await axios.get(`${BASE_URL}/posts/1/comments`);
  });

  test('статус має бути 200', () => {
    expect(response.status).toBe(200);
  });

  test('має повертати масив коментарів', () => {
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('кожен коментар має поля id, postId, name, email, body', () => {
    response.data.forEach((comment) => {
      expect(comment).toHaveProperty('id');
      expect(comment).toHaveProperty('postId');
      expect(comment).toHaveProperty('name');
      expect(comment).toHaveProperty('email');
      expect(comment).toHaveProperty('body');
    });
  });

  test('всі коментарі належать до postId=1', () => {
    response.data.forEach((comment) => {
      expect(comment.postId).toBe(1);
    });
  });
});