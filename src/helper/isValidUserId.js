function isValidUserId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error(`id не число`);
  if (id <= 0) throw new Error(`id отрицательное число`);
  next();
}

function isValidUserBody(req, res, next) {
  const { name, surname, email, pwd, } = req.body;
  if (!name) throw new Error(`name отсутствует`);
  if (!surname) throw new Error(`surname отсутствует`);
  if (!email) throw new Error(`отсутствует`);
  next();
}

module.exports = { isValidUserId, isValidUserBody };
