import { useState } from "react"
import { AddStudent } from "./components/AddStudent"
import { TableList } from "./components/TableList"
import { data } from "./utils/dataArray"


function App() {
  const [students,setstudents]= useState(data)//aray
 

  return (
    <>
   
    <TableList students={students} />
    <AddStudent students={students} setStudents={setstudents}/>
    </>
  )
}

export default App;
