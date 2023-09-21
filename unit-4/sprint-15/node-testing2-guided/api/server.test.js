const db = require('../data/dbConfig');
const request = require('supertest');
const server = require('./server');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

describe('[GET] /hobbits', () => {
  test('should respond 200 OK', async () => {
    const res = await request(server).get('/hobbits');
    expect(res.status).toBe(200);
  });

  test('should respond with all hobbits', async () => {
    const res = await request(server).get('/hobbits');
    expect(res.body).toHaveLength(4);
  });
});

describe('[POST] /hobbits', () => {
  const bilbo = { name: 'bilbo' };

  test('should add a hobbit to the database', async () => {
    await request(server).post('/hobbits').send(bilbo);
    expect(await db('hobbits')).toHaveLength(5);
  });

  test('should respond with the new hobbit', async () => {
    const res = await request(server).post('/hobbits').send(bilbo);
    expect(res.body).toMatchObject(bilbo);
  });
});
