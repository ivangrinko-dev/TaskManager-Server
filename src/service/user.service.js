const { createUserDb, deleteUserDb, getAllUserDb, getUserByIdDb, updateUserDb } = require(`../repository/user.repository`);

// async function createUser(name, surname, email, pwd) {
//   const data = await createUserDb(name, surname, email, pwd);
//   return data;
// }


async function getAllUser() {
  const data = await getAllUserDb();
  if (!data.length) throw new Error(`бд не заполнена`);
  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDb(id);
  if (id <= 0) throw new Error(`id  должен быть больше нуля `);
  return data;
}

async function createUser(name, surname, email, pwd) {
  const data = await createUserDb(name, surname, email, pwd);
  if (data.length == 0) throw new Error(`бд не заполнена`);
  return data;
}

async function updateUser(id, name, surname, email, pwd) {
  const data = await updateUserDb(id, name, surname, email, pwd);
  if (!data.length) throw new Error(`бд не заполнена`);
  return data;
}

async function deleteUser(id) {
  const data = await deleteUserDb(id);
  if (!data.length) throw new Error(`бд не заполнена`);
  return data;
}


module.exports = { createUser, deleteUser, getAllUser, getUserById, updateUser };
