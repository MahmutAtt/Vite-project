import  express  from "express";
import { studentModel } from "../models/student";
const router = express.Router();
// Tüm Öğrencileri Getir
router.get( "/",async (req,res) =>{ 
  try {
    const students = await studentModel.find();// Veritabanından tüm öğrenci kayıtlarını alır
    res.status(200).send(students);// Öğrenci verilerini yanıt olarak gönderir
  }catch{
    res.status(500).send("something went wrong");

  }
   
  });
  // Belirli Bir Öğrenciyi Getir
  router.get("/:id",async(req ,res)=>{
    const id = req.params.id;
    const student = await studentModel.findById(id);
    if(!student){
      res.status(404)
  
    }
    res.send(student);
  
  });
  //  add new student 
  router.post ("/",async(req,res)=>{
    try{
      const data = req.body;
      const newStudent = await studentModel.create(data)
      newStudent.save()
      res.status(201).send(newStudent);
    }catch(err:any){
      res.status(500).send(err.message);

    }
  });
  
  //update student
  router.put("/:id",async(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const student = await studentModel.findByIdAndUpdate(id,data,{new:true})
    if(!student){
     return res.status(404).send("student not found")
    }
    res.send(student)
  });
  //delete student
  router.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete(id)
    if(!student){
      return res.status(404).send("student not found")
    }
    res.send("okay")
  
  })
  export default router;