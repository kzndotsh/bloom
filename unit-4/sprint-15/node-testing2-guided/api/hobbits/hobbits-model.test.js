const Hobbit = require('./hobbits-model');
const db = require('../../data/dbConfig');

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

describe('getAll', () => {
  test('should resolve all the hobbits in the table', async () => {
    const result = await Hobbit.getAll();
    expect(result).toHaveLength(4);
    expect(result[0]).toMatchObject({ name: 'sam' });
  });
});

describe('getById', () => {
  test('should resolve the hobbit by given id', async () => {
    const result = await Hobbit.getById(1);
    expect(result).toMatchObject({ name: 'sam' });
  });
});

describe('insert', () => {
  const bilbo = { name: 'bilbo' };

  test('should resolve the newly created hobbits', async () => {
    const result = await Hobbit.insert(bilbo);
    expect(result).toMatchObject(bilbo);
  });

  test('should add the hobbit to the hobbits table', async () => {
    await Hobbit.insert(bilbo);
    const records = await db('hobbits');
    expect(records).toHaveLength(5);
  });
});
