const db = require('../data/db-config');
const server = require('./server');
const request = require('supertest');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

describe('[GET] /', () => {
  test('should return 200', async () => {
    const res = await request(server).get('/api/status');
    expect(res.status).toBe(200);
  });
});

describe('[GET] /users', () => {
  test('should return 200', async () => {
    const res = await request(server).get('/api/users');
    expect(res.status).toBe(200);
  });

  test('should return an array of users', async () => {
    const res = await request(server).get('/api/users');
    expect(res.body).toHaveLength(3);
  });

  test('should return a user named "john"', async () => {
    const res = await request(server).get('/api/users');
    expect(res.body[0].name).toBe('john');
  });
});

describe('[GET] /users/:id', () => {
  test('should return 200', async () => {
    const res = await request(server).get('/api/users/1');
    expect(res.status).toBe(200);
  });

  test('should return a user named "john"', async () => {
    const res = await request(server).get('/api/users/1');
    expect(res.body.name).toBe('john');
  });

  test('should return a user with an id of 1', async () => {
    const res = await request(server).get('/api/users/1');
    expect(res.body.id).toBe(1);
  });
});

describe('[POST] /users', () => {
  test('should return 201', async () => {
    const res = await request(server)
      .post('/api/users')
      .send({ name: 'bill', email: 'bill@gmail.com' });
    expect(res.status).toBe(201);
  });

  test('should return a user named "bill"', async () => {
    const res = await request(server)
      .post('/api/users')
      .send({ name: 'bill', email: 'bill@gmail.com' });
    expect(res.body.name).toBe('bill');
  });

  test('should return a user with an id of 4', async () => {
    const res = await request(server)
      .post('/api/users')
      .send({ name: 'bill', email: 'bill@gmail.com' });
    expect(res.body.id).toBe(4);
  });
});

describe('[DELETE] /users/:id', () => {
  test('should return 200', async () => {
    const res = await request(server).delete('/api/users/1');
    expect(res.status).toBe(200);
  });

  test('should return a user named "john"', async () => {
    const res = await request(server).delete('/api/users/1');
    expect(res.body.name).toBe('john');
  });

  test('should return a user with an id of 1', async () => {
    const res = await request(server).delete('/api/users/1');
    expect(res.body.id).toBe(1);
  });

  test('should return 404 if user not found', async () => {
    const res = await request(server).delete('/api/users/99');
    expect(res.status).toBe(404);
  });
});

describe('[PUT] /users/:id', () => {
  test('should return 200', async () => {
    const res = await request(server)
      .put('/api/users/1')
      .send({ name: 'jane', email: 'jane123@gmail.com' });
    expect(res.status).toBe(200);
  });

  test('should return a user named "jane"', async () => {
    const res = await request(server)
      .put('/api/users/1')
      .send({ name: 'jane', email: 'jane123@gmail.com' });
    expect(res.body.name).toBe('jane');
  });

  test('should return a user with an id of 1', async () => {
    const res = await request(server)
      .put('/api/users/1')
      .send({ name: 'jane', email: 'jane123@gmail.com' });
    expect(res.body.id).toBe(1);
  });

  test('should return 404 if user not found', async () => {
    const res = await request(server)
      .put('/api/users/99')
      .send({ name: 'jane', email: 'jane123@gmail.com' });
    expect(res.status).toBe(404);
  });
});
