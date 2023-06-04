const { pool } = require(`../db`);

async function getAllUserDb() {
  const client = await pool.connect();
  const sql = "SELECT * FROM users";
  const result = (await client.query(sql)).rows;
  return result;
}

async function getUserByIdDb(id) {
  const client = await pool.connect();

  const sql = "SELECT * FROM users  where id = $1";
  const result = (await client.query(sql, [id])).rows;

  return result;
}

async function createUserDb(name, surname, email, pwd) {
  const client = await pool.connect();
  const sql = `insert into users (name, surname, email, pwd) values ($1, $2, $3, $4) returning *`;
  const result = (await client.query(sql, [name, surname, email, pwd])).rows;
  return result;
}

async function updateUserDb(id, name, surname, email, pwd, task, user_id) {
  const client = await pool.connect();

  const sql = `update users set name = $1, surname  = $2, email = $3, pwd = $4 where id = $5 returning *`;
  const result = (await client.query(sql, [name, surname, email, pwd, id]))
    .rows;

  return result;
}

async function deleteUserDb(id) {
  const client = await pool.connect();
  const sql = `delete from users where id = $1 returning *`;
  const result = (await client.query(sql, [id])).rows;
  return result;
}

module.exports = {
  createUserDb,
  deleteUserDb,
  getAllUserDb,
  getUserByIdDb,
  updateUserDb,
};
