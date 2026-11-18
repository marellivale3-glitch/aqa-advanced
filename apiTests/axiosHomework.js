const axios = require('axios');

async function requestWrongUrl() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/nonexistent-page');
  } catch {
    return 'Request failed: unable to load the resource';
  }
}

async function requestWithHeadersAndParams() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'X-Custom-Header': 'homework',
      },
      params: {
        userId: 1,
      },
    }
  );

  return response.data;
}

module.exports = { requestWrongUrl, requestWithHeadersAndParams };