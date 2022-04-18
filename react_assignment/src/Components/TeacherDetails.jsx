

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./TeacherDetail.css";


export const TeacherDetail = () => {

    const [user, setUser] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`https://react-assignments.herokuapp.com/api/teachers/${id}`).then((data) => {
            console.log(data)
            
            setUser([data.data])
        })
    }, []);

    return (
        <div>
            
            {user.map(e => 
                <div>
                    <h1>Name : {e.name}</h1>
                    <h3>Gender : {e.gender}</h3>
                    <h3>Age : {e.age}</h3>
                    
                    <h1>Classes</h1>
                    <div id="container">
                       
                        {e.classes.map((el) =>
                            <div id="class">
                                <h1> Section : {el.section}</h1>
                                <h2>Grade : {el.grade}</h2>
                                <h2>Subject : { el.subject}</h2>
                                </div>
                                
                        )}
                                
                        </div>
               </div> 
                )}  
      </div>
    )
}
