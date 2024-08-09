import { Button, Paper, TextField } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react"
import { student }from "../utils/dataArray";
//import { red } from "@mui/material/colors"
interface Props{
    students :student[] 
    setStudents:Dispatch<SetStateAction<student[]>>
} 
export const AddStudent = ({setStudents,students}:Props) =>{
    let formData = {id:111,name:"",age: 0 ,email:"",class:""}

    const nameRaf = useRef <HTMLInputElement>(null)
    const ageRaf = useRef <HTMLInputElement>(null)
    const emailRaf = useRef<HTMLInputElement>(null)
    const classRaf = useRef<HTMLInputElement>(null)

      const nameInputChange = (e : ChangeEvent<HTMLInputElement>) => {
            formData.name = e.target.value};
      const ageInputChange = (e : ChangeEvent<HTMLInputElement>) => {
        formData.age= parseInt(e.target.value)};
      const emailInputChange = (e : ChangeEvent<HTMLInputElement>) => {
        formData.email=e.target.value};
      const classInputChange = (e : ChangeEvent<HTMLInputElement>) => {
        formData.class=e.target.value};
      
    const handleSubmit =()=> {
        setStudents([...students ,formData])
        if(nameRaf.current){nameRaf.current.value=""}
        setStudents([...students ,formData])
        if(ageRaf.current){ageRaf.current.value=""}
        setStudents([...students ,formData])
        if(emailRaf.current){emailRaf.current.value=""}
        setStudents([...students ,formData])
        if(classRaf.current){classRaf.current.value=""}



   
}
    return(
        <>
        <Paper sx={{width:400, padding:4,border:'1px solid blue', marginTop:2 , gap:1 ,display:'flex',flexDirection:"column"}}>
        <TextField inputRef={nameRaf} onChange={nameInputChange}  id="outlined-basic" label="Full Name " name="fullName" variant="outlined" />
        <TextField inputRef={ageRaf}  onChange={ageInputChange}  id="outlined-basic" label="Age" name="age" variant="outlined" />
        <TextField inputRef={emailRaf} onChange={emailInputChange}  id="outlined-basic" label="Email" name="email" variant="outlined" />
        <TextField inputRef={classRaf} onChange={classInputChange} id="outlined-basic" label="Class" name="class" variant="outlined" />
        <Button onClick={handleSubmit} variant="contained" >Submit</Button>
        </Paper>
        
        </>
    )}
