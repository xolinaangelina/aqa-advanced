const axios = require('axios');

async function fetchFromInvalidUrl() {
  try {
    const response = await axios.get('https://invalid.url.that.does.not.exist/api');
    return response.data;
  } catch (error) {
    if (error.request) {
      throw new Error('Network error: Unable to reach the server');
    }
    throw new Error(`Unexpected error: ${error.message}`);
  }
}

module.exports = { fetchFromInvalidUrl };