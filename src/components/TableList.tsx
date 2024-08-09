import { student } from "../utils/dataArray"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//import { colors } from "@mui/material";
interface Props{
  students:student[]
  
}

  
export const TableList = (props:Props) =>{
    return(
        <TableContainer component={Paper} sx={{width:400 ,margin:0,padding:4 , border:'1px solid blue'}}>
        <Table size="small" sx={{border:2, background:"#1099"}}>
      <TableHead>
        <TableRow>
          <TableCell>Full Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Emial</TableCell>
          <TableCell>Class</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
       {props.students.map((item) =>{
        return(
        
          <TableRow>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.age}</TableCell>
          <TableCell> {item.email}</TableCell>
          <TableCell>{item.class}</TableCell>
        </TableRow>
        

        )

       })}
          

       
       
      </TableBody>

    </Table>
    </TableContainer>
    
    )
}