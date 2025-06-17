const mango=require('mongoose');

const user_schema=new mango.Schema({
    username:String,
    password:String,
    email:String
})

module.exports= mango.model("users", user_schema);