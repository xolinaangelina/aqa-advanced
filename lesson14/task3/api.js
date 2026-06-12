const axios = require('axios');

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

async function createPost(data) {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    data
  );
  return response.data;
}

async function deletePost(id) {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.status;
}

module.exports = { getUser, createPost, deletePost };