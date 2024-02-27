const db = require("../models");

const { task_tbl } = require("../models");
const addTask = async (req, res) => {
  const { task_name } = req.body;
  try {
    await task_tbl.create({ task: task_name });
    const task = await task_tbl.findAll({
      order: [["id", "ASC"]],
    });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getTask = async (req, res) => {
  try {
    const task = await task_tbl.findAll({
      order: [["id", "ASC"]],
    });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteTask = async (req, res) => {
  const { task_id } = req.params;
  try {
    await task_tbl.destroy({ where: { id: task_id } });
    const task = await task_tbl.findAll({
      order: [["id", "ASC"]],
    });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const updateTask = async (req, res) => {
  const { task_id } = req.params;
  const { task_name } = req.body;
  try {
    await task_tbl.update({ task: task_name }, { where: { id: task_id } });
    const task = await task_tbl.findAll({
      order: [["id", "ASC"]],
    });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getTaskById = async (req, res) => {
  const { task_id } = req.params;
  try {
    const findOne = await task_tbl.findOne({ where: { id: task_id } });
    return res.status(200).json(findOne);
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = {
  addTask,
  getTask,
  deleteTask,
  updateTask,
  getTaskById,
};
