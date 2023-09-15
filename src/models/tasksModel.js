import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Task = db.define(
  "tasks",
  {
    title: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "user_id",
    },
  },
  {
    timestamps: false,
  }
);

export default Task;
