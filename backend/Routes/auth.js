const express=require("express");
const { register, login, verify } = require("../Controller/auth");


const app=express();
const route=express.Router();
route.post("/Register",register);
 route.post("/Login", login);
// route.post("/Home", home);
route.post("/Verify",verify);

module.exports = route;