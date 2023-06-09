const bcrypt = require(`bcrypt`);
const {
  createUserDb,
  gerUserByEmail,
} = require(`../repository/upi.repository`);

const salt = 1;

async function createUser(name, surname, email, pwd) {
  const user = await gerUserByEmail(email);
  if (user.length) throw new Error(`такой user усть`);
  const hashpwd = await bcrypt.hash(pwd, salt);
  const data = await createUserDb(name, surname, email, hashpwd);
  if (!data.length) throw new Error(`user not created`);
  return data;
}

async function authUser(email, pwd) {
  const user = await gerUserByEmail(email);
  if (!user.length) throw new Error(`email not found`);
  const bool = await bcrypt.compare(pwd, user[0].pwd);
  if (!bool) throw new Error(`!!!!!!! пароли не совпадают`);
  return user;
}

module.exports = { createUser, authUser };
