const Users = require('./users-model.js');
const db = require('../../data/db-config.js');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

test('environment set to testing', () => {
  expect(process.env.NODE_ENV).toBe('testing');
});

describe('getAllUsers', () => {
  test('should resolve all users', async () => {
    const res = await Users.getAllUsers();
    expect(res).toHaveLength(3);
  });
});

describe('getUserById', () => {
  test('should resolve a user by id', async () => {
    const res = await Users.getUserById(1);
    expect(res.name).toBe('john');
  });
});

describe('createUser', () => {
  test('should create a new user', async () => {
    const newUser = { name: 'bill', email: 'bill@email.com' };
    const res = await Users.createUser(newUser);
    expect(res.name).toBe('bill');
    expect(res.id).toBeDefined();
  });
});

describe('deleteUserById', () => {
  test('should delete a user by id', async () => {
    await Users.deleteUserById(1);
    const res = await db('users');
    expect(res).toHaveLength(2);
  });
});

describe('updateUserById', () => {
  test('should update a user by id', async () => {
    const updatedUser = { name: 'bill', email: 'bill123@gmail.com' };
    await Users.updateUserById(1, updatedUser);
    const res = await db('users').where('id', 1).first();
    expect(res.email).toBe('bill123@gmail.com');
  });
});
