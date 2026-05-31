const axios = require('axios');

async function fetchWithHeadersAndParams(headers = {}, params = {}) {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'X-Custom-Header': 'my-custom-value',
        'Accept': 'application/json',
        ...headers,
      },
      params: {
        userId: 1,
        _limit: 3,
        ...params,
      },
    }
  );
  return response;
}

module.exports = { fetchWithHeadersAndParams };