import { useEffect, useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { TableList } from "./components/TableList";
import {student} from "./utils/dataArray";
import { fetchStudents } from "./api/students";


function App() {
  const [students,setStudents]= useState<student[]>([]);
  useEffect(()=>{
    fetchStudents().then((data) =>setStudents(data)).catch((err)=>alert(err));

  },[]);
  

  return (
    <>
   
    <TableList students={students} />
    <AddStudent students={students} setStudents={setStudents}/>
    </>
  );
}

export default App;
