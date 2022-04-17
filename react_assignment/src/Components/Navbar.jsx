
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"

export const Navbar = () => {
    return <nav>
        <div style={{
            width: "100%",
            height: "50px",
            // border: "1px solid red",
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "20px",
           marginTop: "20px"

        }}>

            <Link style={{textDecorationLine:"none"}} to ="/"> <Button variant="contained">Home</Button></Link>
            <Link style={{textDecorationLine:"none"}} to="/login"> <Button variant="contained">Login</Button></Link>
            <Link style={{textDecorationLine:"none"}} to="/signup"> <Button variant="contained">Register</Button></Link>
            <Link style={{textDecorationLine:"none"}} to ="/teacherdata"> <Button variant="contained">Create Teacher Data</Button></Link>
        </div>
    </nav>
}