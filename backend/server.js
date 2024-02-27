const express = require("express");
const router = express.Router();
const db = require("./models");
const taskRoute = require("./routes/task_routes");
const cors = require("cors");

const app = express();
const port = 8080;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/task-api", taskRoute);

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Listening to port ${port}`));
});
