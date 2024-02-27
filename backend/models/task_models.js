module.exports = (sequelize, DataTypes) => {
  const task_tbl = sequelize.define("task_tbl", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return task_tbl;
};
