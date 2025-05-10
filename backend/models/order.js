const mongoose=require("mongoose");
const order=new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user",
        },
        book:{
            type:mongoose.Types.ObjectId,
            ref:"book",
        },
        status:{
            type:String,
            default:"Order placed",
            enum:["order placed","out for delivery","Deliverd","canceld"]
        },

    },
    {timestamps:true}
);

module.exports = mongoose.model("order", order);
