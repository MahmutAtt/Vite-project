import { useEffect, useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { TableList } from "./components/TableList";
import {Student} from "./utils/dataArray";
import { fetchStudents } from "./api/students";


function App() {
  const [students,setStudents]= useState<Student[]>([]);
  useEffect(()=>{
    fetchStudents().then((data) =>setStudents(data));

  },[]);
  

  return (
    <>
   
    <TableList students={students} />
    <AddStudent students={students} setStudents={setStudents}/>
    </>
  );
}

export default App;
