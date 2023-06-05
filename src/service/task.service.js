const { createTaskDb, getAllTaskDb, getTaskByIdDb, updateTaskDb, deleteTaskByIdDb, patchTaskByIdDb} = require(`../repository/task.repository`);


async function getAllTask() {
  const data = await getAllTaskDb();
  if(data.length == 0) throw new Error(`БД не заполнена`)
  return data;
}

async function createTask(task, user_id) {
  const data = await createTaskDb(task, user_id);
  if(data.length == 0) throw new Error(`Данные не сохранены`)
  return data;
}

async function getTaskById(id) {
  const data = await getTaskByIdDb(id)
  if(data.length == 0) throw new Error(`Такого id нет`)
  return data
}

async function updateTask(id, task, user_id) {
  const data = await updateTaskDb(id, task, user_id);
  if(data.length == 0) throw new Error(`Такого id нет`)
  return data;
}

async function deleteTaskById(id){
  const data = await deleteTaskByIdDb(id)
  if(data.length == 0) throw new Error(`Такого id нет`)
  return data;
}

async function patchTaskById(id, clientData){
  const data = await patchTaskByIdDb(id, clientData)
  if(data.length == 0) throw new Error(`Такого id нет`)
  return data;
}

module.exports = { createTask, getAllTask, getTaskById, updateTask, deleteTaskById, patchTaskById };
