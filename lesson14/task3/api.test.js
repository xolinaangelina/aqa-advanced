const axios = require('axios');
const { getUser, createPost, deletePost } = require('./api');

jest.mock('axios');

describe('Task 3 — Mocking Axios', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  // ── getUser ──────────────────────────────────────
  describe('getUser()', () => {
    test('повертає дані користувача при успішному запиті', async () => {
      const mockUser = { id: 1, name: 'John Doe', email: 'john@example.com' };
      axios.get.mockResolvedValue({ data: mockUser });

      const result = await getUser(1);

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      expect(result).toEqual(mockUser);
      expect(result.name).toBe('John Doe');
    });

    test('кидає помилку при невдалому запиті', async () => {
      axios.get.mockRejectedValue(new Error('Network Error'));

      await expect(getUser(999)).rejects.toThrow('Network Error');
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });

  // ── createPost ───────────────────────────────────
  describe('createPost()', () => {
    test('повертає створений пост при успішному запиті', async () => {
      const newPost = { title: 'Mock post', body: 'Mock body', userId: 1 };
      const mockResponse = { ...newPost, id: 101 };
      axios.post.mockResolvedValue({ data: mockResponse });

      const result = await createPost(newPost);

      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts',
        newPost
      );
      expect(result.id).toBe(101);
      expect(result.title).toBe('Mock post');
    });

    test('кидає помилку при невдалому POST запиті', async () => {
      axios.post.mockRejectedValue(new Error('Server Error'));

      await expect(createPost({})).rejects.toThrow('Server Error');
    });
  });

  // ── deletePost ───────────────────────────────────
  describe('deletePost()', () => {
    test('повертає статус 200 при успішному видаленні', async () => {
      axios.delete.mockResolvedValue({ status: 200 });

      const status = await deletePost(1);

      expect(axios.delete).toHaveBeenCalledTimes(1);
      expect(axios.delete).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      expect(status).toBe(200);
    });

    test('кидає помилку при невдалому DELETE запиті', async () => {
      axios.delete.mockRejectedValue(new Error('Delete failed'));

      await expect(deletePost(999)).rejects.toThrow('Delete failed');
    });
  });
});