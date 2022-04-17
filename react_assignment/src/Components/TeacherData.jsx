
import { useReducer, useState } from 'react'
import {getTeacherData} from "../Redux/Teacher/action"
import { useDispatch } from "react-redux";
const initState = {
    name: "",
    gender: "",
    age: "",
    classes: [],
}

const reducer=(state, {type,payload})=> {
    switch (type) {
        case 'Change_name':
            return { ...state, name: payload };
        case 'Change_gender':
            return { ...state, gender: payload };
        case 'Change_age':
            return { ...state, age: payload };
        case "Add_classes":
            return { ...state, classes: [...state.classes,payload] };
          
        default:
            throw new Error("Please give proper action");
    };
}

export const Teacher = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    const [section, setSection] = useState("");
    const [grade, setGrade] = useState("");
    const [sub, setSub] = useState("");

    
    const { name, age, gender, classes } = state;

    const Newdispatch = useDispatch();

    const Createdata = () => {
        const payload = { ...state };
        fetch(" http://localhost:8080/teachers", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
        }).then(() => Newdispatch(getTeacherData()));
    }
    
    return (
        <div>
            <label>Name</label>
            <br />
            <input type="text"
                value={name}
                placeholder="Enter Name"
            onChange={(e) => dispatch({type: 'Change_name',payload: e.target.value})}
            />
            <br />
            
            <label>Gender</label>
            
            <br />
            <input type="text"
                value={gender}
                placeholder="Enter Gender"
            onChange={(e) => dispatch({type: 'Change_gender',payload: e.target.value})}
            />

            <br />                        
            <label>Age</label>            
            <br />
            <input type="number"
                value={age}
                placeholder="Enter Age"
            onChange={(e) => dispatch({type: 'Change_age',payload: e.target.value})}
            />
            <br />
            
            <h1>Add Classes</h1>
            <label>Section</label>
            <br/>
            <input type="text"
                value={section}
                placeholder="Enter Section"
                onChange={(e) => setSection(e.target.value)}
            />
            <br />

            <label>Grade</label>
            <br/>
            <input type="text"
                value={grade}
                placeholder="Enter Grade"
                onChange={(e) => setGrade(e.target.value)}
            />
            <br />
            
            <label>Subject</label>
            <br/>
            <input type="text"
                value={sub}
                placeholder="Enter Subject"
                onChange={(e) => setSub(e.target.value)}
            />
            <br />

            <button onClick={() => {
                const payload = {
                    section: section,
                    grade: grade,
                    subject: sub,
                };
               dispatch({type:"Add_classes",payload})  
            }}>Add Class</button>

            <br />
            <br />
            <button onClick={Createdata}>Add Teacher Data</button>
        </div>
    )
}