const mongoose = require("mongoose");

const {Schema} = mongoose;

const categorySchema = new Schema({
    name : {type :String ,required : true,unique : true},
    image : {type : String ,require : true}
});

const Category = mongoose.model("categories",categorySchema);

module.exports = Category;