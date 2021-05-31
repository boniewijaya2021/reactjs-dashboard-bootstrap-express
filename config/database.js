// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('ujian_avows', 'root', 'iphone6plus', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
export default db;