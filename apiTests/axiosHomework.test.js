const axios = require('axios');
const {
  requestWrongUrl,
  requestWithHeadersAndParams,
} = require('./axiosHomework');

afterEach(() => {
  jest.restoreAllMocks();
});

test('should return an error message for an incorrect URL', async () => {
  const result = await requestWrongUrl();

  expect(result).toBe('Request failed: unable to load the resource');
});

test('should include custom headers and URL params', async () => {
  const getSpy = jest.spyOn(axios, 'get').mockResolvedValue({
    data: [],
  });

  await requestWithHeadersAndParams();

  expect(getSpy).toHaveBeenCalledWith(
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
});

test('should return data when the mocked request succeeds', async () => {
  const posts = [{ id: 1, userId: 1, title: 'Test post' }];

  jest.spyOn(axios, 'get').mockResolvedValue({
    data: posts,
  });

  const result = await requestWithHeadersAndParams();

  expect(result).toEqual(posts);
});

test('should return an error message when the mocked request fails', async () => {
  jest.spyOn(axios, 'get').mockRejectedValue(
    new Error('Network Error')
  );

  const result = await requestWrongUrl();

  expect(result).toBe('Request failed: unable to load the resource');
});