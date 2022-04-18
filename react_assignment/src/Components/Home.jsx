
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Home = () => {
    
    
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 5;

    const getData = (page, perPage) => {
       
        axios.get("https://react-assignments.herokuapp.com/api/teachers", {
            params: {
                _page: page,
                _limit:perPage,
            }
        }).then((res) => {
            console.log(res)
            
            setData([...res.data])
})
    }

    useEffect(() => {
        getData(page,perPage);
    }, [page,perPage])
    
        const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    

    const handleSort = (val) => {
        if (val == 1) {
            data.sort((a, b) => a.age - b.age);

            setData([...data])
        } 
        else {
            data.sort((a, b) => b.age - a.age);

            setData([...data])
        }
    }


    return (
        <>
            <hr/>

            <div style={{ marginTop: "20px", marginBottom: "20px" ,display:"flex",justifyContent:"space-evenly"}}>
               
                <TextField id="outlined-basic" label="Search Box" variant="outlined" />
                
                
                <Button variant="outlined" onClick={() =>{handleSort(2)}}>Sort Age Desc</Button>
                <Button variant="outlined" onClick={() =>{handleSort(1)}}>Sort Age Asc</Button>
            </div>  
            <div >        


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Button color="secondary">Sr No.</Button></TableCell>
            <TableCell align="right"><Button color="secondary">Name</Button></TableCell>
            <TableCell align="right"><Button color="secondary">Gender</Button></TableCell>
            <TableCell align="right"><Button color="secondary">Age</Button></TableCell>
            <TableCell align="right"><Button color="secondary">Classes</Button></TableCell>
            <TableCell align="right"><Button color="secondary">Details</Button></TableCell>
                               
                                
                                
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
              
            <TableRow 
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                  
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.classes.length}</TableCell>
                  <TableCell align="right"><Button variant="outlined"><Link style={{textDecorationLine:"none"}} to={`/teacherdetails/${row.id}`}> Details</Link></Button></TableCell>              
                 
                  </TableRow>
                
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 

            </div>
            
            <div style={{marginTop: "20px", display: "flex",gap:"15px", justifyContent: "center"}}>
               
                <Button variant="outlined" disabled={page == 1} onClick={() => setPage(page - 1)}> PREV</Button>
                <Button variant="outlined" onClick={() =>setPage(page + 1)}> NEXT</Button>
            </div>
          
        </>
   ) 
}

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  