const userCollection = require("../models/user_model");
const {Msg} = require("../utils/core");
const register = async(req,res,next)=>{
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    await new userCollection({name,phone,password}).save();
    Msg(res,"Registered Successfully!",req.body);
}


module.exports = {
    register
}