panduan

npm init
npm install express mysql2 sequelize cors
edit package.json tambahkan "type":"module"
npm install --save-dev sequelize-cli


npx sequelize-cli init (otomatis tergenerate folder : config,models,migrations,seeders)

//model & table generator
//contoh comand
npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string,email:string,password:string
npx sequelize-cli model:generate --name Product --attributes title:string,price:integer
//update
digunakan hanya untuk create tabel karena sequelize-cli sudah tidak di manintenance 
https://github.com/RobinBuschmann/sequelize-typescript/issues/465 
"Since sequelize-cli-typescript doesn't seem to be maintained anymore, its definitely better to use sequelize-cli instead. In general I cannot recommend the one or the other, because I never used these tools. Sry"
//problems
npx sequelize-cli db:migrate ( biasanya akan error di "type": "module" hapus dulu sementara)
sequelize saya pakai hanya untuk development, untuk memudahkan pembuatan tabel-table di database 
//dibuang
model yang di generate isinya di ganti dengan :
import { Sequelize } from "sequelize";
import db koneksi
//init data
const { DataTypes } = Sequelize;
buat array datanya :
const User = db.define('namatable',{})
//lihat file sample aja
nama table akan tergenarate dengan 's' di belakangnya mirip dengan eloquent laravel.
//

https://sequelize.org/master/manual/getting-started.html
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
npm i @babel/core @babel/node @babel/preset-env
node --experimental-json-modules about.js
npm i sequelize pg
npm i @babel/register
npm i -D nodemon
npm i bcrypt body-parser mysql jsonwebtoken

tabel product
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `jenis` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
)