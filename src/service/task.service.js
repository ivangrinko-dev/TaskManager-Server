const { createTaskDb, getAllTaskDb, getTaskByIdDb } = require(`../repository/task.repository`);


async function getAllTask() {
  const data = await getAllTaskDb();
  return data;
}

async function createTask(task, user_id) {
  const data = await createTaskDb(task, user_id);
  return data;
}

async function getTaskById(id) {
  const data = await getTaskByIdDb(id)
  return data
}

module.exports = { createTask, getAllTask, getTaskById };
