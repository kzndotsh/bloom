const users = [
  { id: 1, name: 'john', email: 'john@gmail.com' },
  { id: 2, name: 'amy', email: 'amy@gmail.com' },
  { id: 3, name: 'bob', email: 'bob@gmail.com' },
];

exports.users = users;

exports.seed = function (knex) {
  return knex('users').insert(users);
};
