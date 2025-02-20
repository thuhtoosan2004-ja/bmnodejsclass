const userCollection = require("../models/user_model");
// const encoder = require("../utils/core");
const {Msg,Encoder} = require("../utils/core");
const register = async(req,res,next)=>{
    let name = req.body.name.toLowerCase();
    let phone = req.body.phone;
    // let password = req.body.password;
    
    try{
        let dbUserName = await userCollection.findOne({name});
        if(dbUserName){
            next(new Error("username is already user!"));
            return;
        }

        let dbUserPhone = await userCollection.findOne({phone});
        if(dbUserPhone){
            next(new Error("Phone is already user!"));
            return;
        }
        let password = Encoder.encode(req.body.password);
        await new userCollection({name,phone,password}).save();
        Msg(res,"Registered Successfully!",req.body);
    }catch(e){
        next(new Error("Data error"));
    }
    // await new userCollection({name,phone,password}).save();
    // Msg(res,"Registered Successfully!",req.body);
}

const login = async(req,res,next)=>{
    let name = req.body.name;
    let password = req.body.password;
    let dbUser = await userCollection.findOne({name});
    if(!dbUser){
        next(new Error("Cretitial Error"));
        return;
    }

    if(!Encoder.compare(password,dbUser.password)){
        next(new Error("Cretitial Error"));
        return;
    }

    Msg(res,"Login Successful!");
}


module.exports = {
    register,
    login
}