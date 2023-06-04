const { pool } = require(`../db`);

async function getAllTaskDb() {
  const client = await pool.connect();
  const sql = "SELECT * FROM tasks";
  const result = (await client.query(sql)).rows;
  return result;
}

async function createTaskDb(task, user_id) {
  const client = await pool.connect();
  const sql = `insert into tasks (task, user_id) values ($1, $2) returning *`;
  const result = (await client.query(sql, [task, user_id])).rows;
  return result;
}

async function getTaskByIdDb(id) {
  const client = await pool.connect();
  const sql = `select * from tasks where id = $1`
  const result = (await client.query(sql, [id])).rows
  return result
}
module.exports = {
  createTaskDb,
  getAllTaskDb,
  getTaskByIdDb,
};
