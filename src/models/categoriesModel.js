import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Category = db.define('categories', {

    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(80),
        defaultValue: "There is not need"
    }
}, {
    
    timestamps: false
    
})

export default Category