panduan

```bash
npm init
```
```bash
npm install express mysql2 sequelize cors
```
```bash
edit package.json tambahkan "type":"module"
```bash
npm install --save-dev sequelize-cli
```

npx sequelize-cli init (otomatis tergenerate folder : config,models,migrations,seeders)

//model & table generator
//contoh comand
```bash
npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string,email:string,password:string
```
```bash
npx sequelize-cli model:generate --name Product --attributes title:string,price:integer
```
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
```bash
$ npm install --save pg pg-hstore # Postgres
```
```bash
$ npm install --save mysql2
```
```bash
$ npm install --save mariadb
```
```bash
$ npm install --save sqlite3
```
```bash
$ npm install --save tedious # Microsoft SQL Server
```
```bash
npm i @babel/core @babel/node @babel/preset-env
````
node --experimental-json-modules about.js
```bash
npm i sequelize pg
```
```bash
npm i @babel/register
```
```bash
npm i -D nodemon
```
```bash
npm i bcrypt body-parser mysql jsonwebtoken
```


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

![Screenshot_2021-05-31 React App(2)](https://user-images.githubusercontent.com/83107580/120125652-91895200-c1b1-11eb-8a64-7515c7b9262e.png)

![Screenshot_2021-05-31 React App(1)](https://user-images.githubusercontent.com/83107580/120125669-a49c2200-c1b1-11eb-8333-539382453b4c.png)
![Screenshot_2021-05-31 React App](https://user-images.githubusercontent.com/83107580/120125675-a6fe7c00-c1b1-11eb-9b04-bcf31b79e0ba.png)
![Screenshot_2021-05-30 React App(3)](https://user-images.githubusercontent.com/83107580/120125680-ab2a9980-c1b1-11eb-8846-0be0970b0767.png)

