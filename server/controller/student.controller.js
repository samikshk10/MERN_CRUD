
const studentModel = require("../models/Student");
async function getAllStudent (req,res)
{
    const studentfind = await studentModel.find();
    //   console.log(studentfind);
    if(studentfind.length==0)
    {
        res.status(200).json({
            message:"student record empty"
        })
    }    
    res.status(200).json(studentfind);
}

async function addStudent(req,res)
{
    try{
        const{name,address} = req.body;
            const addStudent = new studentModel({name:name, address: address});

            await addStudent.save();

            res.status(200).json({
                message:"Student inserted successfully"
            })
    }

    catch(error)
    {
        console.log("Error>>>"+ error);
    }   
}

async function deleteStudent(req,res)
{
    studentModel.findByIdAndDelete(req.params.id)
  .then((result) => {
    if (result) {
        res.status(200).json({
            message:"Student deleted successfully"
        })
    } else {
        res.status(200).json({
            message: "Student not found"
        })
    }
  })
  .catch((error) => {
    console.error('Error :'+ error);
  });
}



async function editStudent(req,res)
{

    const {name, address}= req.body;
    const{ id}= req.params;

    const updateData = {
        name:name,
        address: address,
      };
      
      const options = {
        new: true, 
      };
      
      studentModel.findByIdAndUpdate(id, updateData, options)
        .then((result) => {
          if (result) {
            res.status(200).json({
                message:"student updated successfully",
                data: result
            })
          } else {
            res.status(200).json({
                message:"student not found"
            })
          }
        })
        .catch((error) => {
          console.error('Error >>>:'+ error);
        });
}
module.exports = {
    getAllStudent,
    addStudent,
    deleteStudent,
    editStudent
}