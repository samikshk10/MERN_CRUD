
const {model,Schema}= require("mongoose");


const studentSchema = new Schema({
  name: { type: String, required: true },
  address:{type:String,required:true}
 
});

module.exports = model('Student', studentSchema);