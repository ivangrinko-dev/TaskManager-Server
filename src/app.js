const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);
const user = require(`./controller/user.controller`);
const task = require(`./controller/task.controller`);

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(`/user`, user);
app.use(`/task`, task);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
