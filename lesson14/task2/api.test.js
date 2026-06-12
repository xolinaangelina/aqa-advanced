const axios = require('axios');
const { fetchWithHeadersAndParams } = require('./api');

describe('Task 2 — Request Headers and Params', () => {
  let response;

  beforeAll(async () => {
    response = await fetchWithHeadersAndParams();
  });

  test('статус має бути 200', () => {
    expect(response.status).toBe(200);
  });

  test('має повертати масив постів', () => {
    expect(Array.isArray(response.data)).toBe(true);
  });

  test('параметр _limit=3 обмежує результати до 3', () => {
    expect(response.data.length).toBeLessThanOrEqual(3);
  });

  test('параметр userId=1 фільтрує пости правильно', () => {
    response.data.forEach((post) => {
      expect(post.userId).toBe(1);
    });
  });

  test('запит містить кастомний хедер X-Custom-Header', async () => {
    const spy = jest.spyOn(axios, 'get');
    await fetchWithHeadersAndParams({ 'X-Test-Header': 'test-value' });

    const calledConfig = spy.mock.calls[0][1];
    expect(calledConfig.headers['X-Test-Header']).toBe('test-value');

    spy.mockRestore();
  });

  test('запит містить параметри URL', async () => {
    const spy = jest.spyOn(axios, 'get');
    await fetchWithHeadersAndParams({}, { _limit: 2 });

    const calledConfig = spy.mock.calls[0][1];
    expect(calledConfig.params._limit).toBe(2);

    spy.mockRestore();
  });
});