// Import express
import express from "express";
// Import Controller Product

 import {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    loginUser
 } from "../controllers/User.js";
 
 // Init express router
const userroute = express.Router();

userroute.get('/users', getUser);
userroute.get('/users/:id', getUserById);
userroute.put('/users/:id', updateUser);
userroute.delete('/users/:id', deleteUser);
//dibedakan untuk auth
userroute.post('/register', createUser);
userroute.post('/login', loginUser);
 
// export router
export default userroute;