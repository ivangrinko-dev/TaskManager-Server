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
  const sql = `select * from tasks where id = $1`;
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function updateTaskDb(id, task, user_id) {
  const client = await pool.connect();
  const sql = `update tasks set task = $1, user_id = $2 where id = $3 returning *`;
  const result = (await client.query(sql, [task, user_id, id])).rows;
  return result;
}

async function deleteTaskByIdDb(id) {
  const client = await pool.connect();
  const sql = `delete from tasks where id = $1 returning *`;
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function patchTaskByIdDb(id, clientData) {
  const client = await pool.connect();
  const sql_1 = `select * from tasks where id = $1`;
  const result_1 = (await client.query(sql_1, [id])).rows;

  const merge = { ...result_1[0], ...clientData };

  const sql_2 = `update tasks set task = $1, user_id = $2 where id = $3 returning *`;
  const result_2 = (await client.query(sql_2, [merge.task, merge.user_id, id]))
    .rows;
  return result_2;
}

module.exports = {
  createTaskDb,
  getAllTaskDb,
  getTaskByIdDb,
  updateTaskDb,
  deleteTaskByIdDb,
  patchTaskByIdDb,
};
