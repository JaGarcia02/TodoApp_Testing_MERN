const express = require("express");
const router = express.Router();
const {
  addTask,
  getTask,
  deleteTask,
  updateTask,
  getTaskById,
} = require("../controllers/task_controllers");
router.post("/create-task", addTask);
router.get("/get", getTask);
router.delete("/delete-task/:task_id", deleteTask);
router.put("/update-task/:task_id", updateTask);
router.get("/getById/:task_id", getTaskById);
module.exports = router;
