 export const fetchStudents = async()=>{
 const response = await fetch("http://localhost:3000/Students");

   
   const data = await response.json();
  return data;
};
 
