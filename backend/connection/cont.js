const { default: mongoose } = require("mongoose");
const mogoose=require("mongoose");

const con=async()=>{
try{
await mongoose.connect(`${process.env.URI}`);
console.log("mongodb ok");
}
catch(error){
console.log(error);
}
};
con();