import { Button, Paper, TextField } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import { student }from "../utils/dataArray";

interface Props{
    students :student[] 
    setStudents:Dispatch<SetStateAction<student[]>>;
} 
const initialState={id:111,fullName:"",age: "" ,email:"",class:""}
export const AddStudent = ({setStudents,students}:Props) =>{
  const [formData,setFormData] = useState(initialState)
     
   

const InputChange = (e : ChangeEvent<HTMLInputElement>) => { 
   setFormData({...formData,[e.target.name]:e.target.value})
};
   
const handleSubmit =()=>{
   setStudents([...students ,formData]);
   setFormData(initialState)
 };

useEffect(()=>{
  if(formData.fullName === "Admin"){
    alert("error")

  }

    },[formData.fullName])
    return(
        <>
        <Paper sx={{width:400, padding:4,border:'1px solid blue', marginTop:2 , gap:1 ,display:'flex',flexDirection:"column"}}>
        <TextField value={formData.fullName} onChange={InputChange}  id="outlined-basic" label="Full Name " name="fullName" variant="outlined" />
        <TextField value={formData.age} onChange={InputChange}  id="outlined-basic" label="Age" name="age" variant="outlined" />
        <TextField  value={formData.email} onChange={InputChange}  id="outlined-basic" label="Email" name="email" variant="outlined" />
        <TextField value={formData.class} onChange={InputChange} id="outlined-basic" label="Class" name="class" variant="outlined" />
        <Button onClick={handleSubmit} variant="contained" >Submit</Button>
        </Paper>
        
        </>
    )
  };