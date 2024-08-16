
import { student } from "../utils/dataArray";
const Baglanti = "http://localhost:3000/students"

 export const fetchStudents = async()=>{
  try{
    const response = await fetch(Baglanti);
    if(!response.ok){
      throw new Error(`${response.statusText} : ${response.status}`)
    }
 return await response.json();
  }catch(err){
    throw err;

  }
};
//forma yazilan veriler veri tabanina kaydetme
export const createStudent = async(data:student)=> {
  try{
      const response = await fetch(Baglanti,{
       method:"POST",
       body:JSON.stringify(data),
       headers:{"Content-Type":"application/json" },} );
       if(!response.ok){
       throw new Error(`${response.statusText} : ${response.status}`);}
         return await response.json();
        } catch (err){
        throw err;
     }
};
 
