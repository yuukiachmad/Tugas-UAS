import { Sequelize } from "sequelize";

const db = new Sequelize('pembayaran','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;