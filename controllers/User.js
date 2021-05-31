// Import model user
import User from "../models/user.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



process.env.SECRET_KEY = 'rahasiaku'

// Get semua user
export const getUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.send(user);
    } catch (err) {
        console.log(err);
    }
}
 
// Get user berdasarkan id
export const getUserById = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(user[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create user baru

export const createUser = async (req, res) => {
    
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password, salt);
console.log(hashedPassword);
const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hashedPassword
  }

    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(!user){
             try {
                    await User.create(userData);
                    res.json({
                        "message": "Pendaftaran Berhasil"
                    });
                } catch (err) {
                    console.log(err);
                }
        }else{
            res.json({"message":"Email Sudah Terdaftar"})
        }
    } catch (err) {
        console.log(err);
    }  
}
export const loginUser = async(req,res) => {

    try{
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(!user){
            let emailFail = "1";
            res.json(emailFail);
            
        }else{
            var passwordnya = user.password;
            const validPass = await bcrypt.compareSync(req.body.password,passwordnya);
            console.log(passwordnya);
            console.log(validPass);
            if(validPass){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {expiresIn: 1440})
                res.json(token);
            }else{
                let passFail = "1";
                res.json(passFail);
        }
        }
    }catch (err) {
        console.log(err);
    }
}

// Update user berdasarkan id
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete user berdasarkan id
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}


