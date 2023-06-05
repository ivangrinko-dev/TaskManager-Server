function isValidUserId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error(`id не число`);
  if (id <= 0) throw new Error(`id отрицательное число`);
  next();
}

function isValidTaskId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error(`id не число`);
  if (id <= 0) throw new Error(`id отрицательное число`);
  next();
}

function isValidTaskBody(req, res, next) {
  const {task, user_id } = req.body;
  if (!task) throw new Error(`task отсутствует`);
  if (!user_id) throw new Error(`user_id отсутствует`);
  if (user_id <= 0) throw new Error(`"-" user_id`);
  if (!isNaN(task)) throw new Error(`Невалидное значение`);
  if (!isNaN(user_id)) throw new Error(`Невалидное значение`);
  next();
}

module.exports = { isValidUserId, isValidUserBody, isValidTaskId, isValidTaskBody };
