import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('pembayaran', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    telepon: DataTypes.STRING,
    status: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();