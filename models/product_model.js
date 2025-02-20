const mongoose = require("mongoose");

const {Schema} = mongoose;

const productSchema = new Schema({
    name : {type : String ,required : true},
    price : {type : Number ,required : true},
    category : {type : Schema.Types.ObjectId,required : true,ref : "categories"},
    user : {type: Schema.Types.ObjectId,required : true,ref : "users"},
    tags : [String],
    size : {type :String ,enum : ["S","M","L","XL","XXL"],default : "M"},
    colors : [String],
    discount : {type : Schema.Types.Double,default : 0.0},
    images : [
        {
            link : {type :String,required : true},
            desc : {type : String ,required : true}
        }
    ],
    shipping :[
        {
            name : {type : String ,required : true},
            cost : {type : Number ,deafult : 0},
            desc : {type : String ,required : true}
        }
    ]
});


productSchema.index({tags : 1});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;