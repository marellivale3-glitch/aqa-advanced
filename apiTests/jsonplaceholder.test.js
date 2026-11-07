const axios = require('axios');

describe('JSONPlaceholder API Tests', () => {
  test('GET /posts/1 - should return post with ID 1', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data.userId).toBe(1);
    expect(typeof response.data.title).toBe('string');
    expect(typeof response.data.body).toBe('string');
  });
});

test('GET /posts - should return all posts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data).toHaveLength(100);
  expect(response.data[0]).toHaveProperty('id');
  expect(response.data[0]).toHaveProperty('title');
  expect(response.data[0]).toHaveProperty('body');
  expect(response.data[0]).toHaveProperty('userId');
});

test('GET /users/1 - should return user with ID 1', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');

  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);
  expect(response.data.name).toBe('Leanne Graham');
  expect(response.data.email).toBe('Sincere@april.biz');
});

test('POST /posts - should create a new post', async () => {
  const newPost = {
    title: 'My first API test',
    body: 'Learning API testing with Axios',
    userId: 1,
  };

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

  expect(response.status).toBe(201);
  expect(response.data.title).toBe(newPost.title);
  expect(response.data.body).toBe(newPost.body);
  expect(response.data.userId).toBe(newPost.userId);
  expect(response.data.id).toBe(101);
});

test('POST /posts - should create another post', async () => {
  const newPost = {
    title: 'Second API test',
    body: 'QA Automation homework 14.1',
    userId: 2,
  };

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

  expect(response.status).toBe(201);
  expect(response.data.title).toBe(newPost.title);
  expect(response.data.body).toBe(newPost.body);
  expect(response.data.userId).toBe(2);
  expect(response.data.id).toBe(101);
});
