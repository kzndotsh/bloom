const db = require('../data/dbConfig');
const server = require('./server');
const request = require('supertest');

// Write your tests here
// test('sanity', () => {
//   expect(true).toBe(true);
// });

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

// beforeEach(async () => {
//   await db.seed.run();
// });

// /api/auth/register
describe('[POST] /api/auth/register', () => {
  test('responds with the newly created user', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: 'test', password: 'test' });
    expect(res.body).toMatchObject({ username: 'test' });
  });
  test('responds with a 401 error if username is missing', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ password: 'test' });
    expect(res.status).toBe(401);
  });
  test('responds with a 401 error if password is missing', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: 'test' });
    expect(res.status).toBe(401);
  });
  test('responds with a 401 error if username is taken', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: 'test', password: 'test' });
    expect(res.status).toBe(401);
  });
});

// /api/auth/login
describe('[POST] /api/auth/login', () => {
  test('responds with the user welcome message', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'test', password: 'test' });
    expect(res.body).toMatchObject({ message: 'welcome, test' });
  });
  test('responds with a 401 error if username is missing', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ password: 'test' });
    expect(res.status).toBe(401);
  });
  test('responds with a 401 error if password is missing', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'test' });
    expect(res.status).toBe(401);
  });
  test('responds with a 401 error if username is not found', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'test2', password: 'test' });
    expect(res.status).toBe(401);
  });
  test('responds with a 401 error if password is incorrect', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'test', password: 'test2' });
    expect(res.status).toBe(401);
  });
});

// /api/jokes
