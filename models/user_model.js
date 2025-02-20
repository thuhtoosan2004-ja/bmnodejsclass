const mongoose = require("mongoose");
const {Schema} = mongoose;

let userSchema = new Schema({
    name : {type : String,required : true,unique : true},
    phone :{type : String,required : true,unique : true},
    password: {type :String,required : true},
    type : {
        type: String ,enum: ["Buyer","Seller"],default : "Buyer"
    },
    unit : {
        type : Schema.Types.Int32,
        default : 0
    },
    created: {
        type : Date,
        default : Date.now
    }
});


const User = mongoose.model("users",userSchema)

module.exports = User;