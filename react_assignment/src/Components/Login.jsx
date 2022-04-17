


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {loginloading,loginfailed,loginsuccess} from "../Redux/Login/action"

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = () => {
        const userdetails = { username, password };

        dispatch(loginloading())
        axios.post(`https://masai-api-mocker.herokuapp.com/auth/login`, userdetails).then((res) => {
            dispatch(loginsuccess(res.data.token));
            // console.log(res)
            navigate("/")
        }).catch((err) => dispatch(loginfailed()));
    }
    return (
        <>
            <h1>Login</h1>
            <input type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            <br />
            
            <input type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <br />
            
            <button disabled={!username && !password} onClick={()=>handleSubmit()}>Login</button>
        
        </>
    )
}