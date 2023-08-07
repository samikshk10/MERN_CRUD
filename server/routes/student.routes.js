const express = require("express");

const studentRoutes= express.Router();
const studentController = require("../controller/student.controller");

studentRoutes.get("/getall-student",studentController.getAllStudent);
studentRoutes.post("/add-student",studentController.addStudent);
studentRoutes.post("/delete-student/:id",studentController.deleteStudent);
studentRoutes.post("/edit-student/:id",studentController.editStudent);

module.exports= studentRoutes;