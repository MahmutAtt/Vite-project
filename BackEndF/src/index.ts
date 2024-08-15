
import express from "express"
import mongoose from "mongoose";
import studentsRouter  from "./routers/students"

const app = express()
const port = 3000;
app.use(express.json());

// MongoDB'ye Bağlantı
mongoose
.connect("mongodb://127.0.0.1:27017/students")
.then(() => console.log('Connected!'))
app.use ('/students',studentsRouter)

app.listen(port,()=>{
    console.log("running on port"+ port);

}) ;