const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Product name is required"],
            trim: true,
            maxlength:[100,"Product name must be less than 100 characters"]

        },
        description:{
            type:String,
            trim:true
        },
        price:{
            type:Number,
            required:[true,"Price is required"],
            min:[0,"Price cannot be negative"]
        },
        category:{
            type:String,
            enum:["Electronics","Clothing","food","Home","others"],
            default:'others'
        },
        stock:{
            type:Number,
            default:0,
            min:[0,"Stock cannot be negative"]
        },
        isActive:{
            type:Boolean,
            default:true
        },
        
    },
    {
            timestamps:true
    }
);
module.exports = mongoose.model('Product', productSchema);