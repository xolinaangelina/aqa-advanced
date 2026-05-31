const { fetchFromInvalidUrl } = require('./api');

describe('Task 1 — Error Handling', () => {
  test('має кидати помилку при запиті на невірну URL', async () => {
    await expect(fetchFromInvalidUrl()).rejects.toThrow();
  });

  test('повідомлення про помилку має бути рядком', async () => {
    try {
      await fetchFromInvalidUrl();
    } catch (error) {
      expect(typeof error.message).toBe('string');
    }
  });

  test('має повертати Network error при недосяжному сервері', async () => {
    try {
      await fetchFromInvalidUrl();
    } catch (error) {
      expect(error.message).toMatch(/Network error|Unexpected error/);
    }
  });
});