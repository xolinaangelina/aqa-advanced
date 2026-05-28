const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('Негативні кейси', () => {
  test('GET неіснуючого поста має повертати 404', async () => {
    try {
      await axios.get(`${BASE_URL}/posts/99999`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });

  test('POST з headers повертає 201 і правильний content-type', async () => {
    const response = await axios.post(
      `${BASE_URL}/posts`,
      { title: 'test', body: 'test', userId: 1 },
      { headers: { 'Content-Type': 'application/json' } }
    );
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toContain('application/json');
  });
});