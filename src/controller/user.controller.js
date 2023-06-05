const express = require(`express`);
const { createUser, deleteUser, getAllUser, getUserById, updateUser } = require(`../service/user.service`)
const route = express.Router();
const { buildResponse } = require(`../helper/buildResponse`)
const { isValidUserId, isValidUserBody } = require(`../helper/validation`)


route.get(`/`, async (req, res) => {
  try {
    const data = await getAllUser();
    res.send(data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get(`/:id`, isValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    res.send(data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post(`/`, isValidUserBody, async (req, res) => {
  try {
      const { name, surname, email, pwd } = req.body;
      const data = await createUser(name, surname, email, pwd);
      res.send(data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put(`/:id`, isValidUserId, isValidUserBody, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd} = req.body;
    const data = await updateUser(id, name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete(`/:id`, isValidUserId, async (req, res) => {
  try {
    const { id } = req.params
    const data = await deleteUser(id);
    res.send(data);

  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});





module.exports = route;
