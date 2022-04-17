import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Login } from "./Components/Login";
import { Home } from "./Components/Home";
import { useSelector } from 'react-redux';
import { PrivateRoute } from './Components/PrivateRoute';
import { Register } from './Components/Register';
import { Navbar } from './Components/Navbar';
import { Teacher } from "./Components/TeacherData"
import { TeacherDetail } from "./Components/TeacherDetails"


function App() {

  const {isauthenticated} = useSelector((state) => state.login)
  
  return (
    <div className="App">

      <Navbar/>
      <Routes>
       
        <Route path="/" element={
          <PrivateRoute isauthenticated={isauthenticated}>
            <Home />
          </PrivateRoute>
          }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/teacherdata" element={<Teacher />}></Route>
        <Route path="/teacherdetails/:id" element={<TeacherDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
