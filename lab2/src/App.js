/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css';
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

import StudentList from './Components/Student/Student.jsx'
import AddStudent from './Components/Student/add.jsx';
import DetailsStudent from './Components/Student/details.jsx';
import EditStudent from './Components/Student/edit.jsx'

// import Department from './Components/Department/Departments.jsx'

const App = () => {

  let [studentList, setStudentList] = useState([
    { id: "1", name: "Mrym", image: 'images/4.jpg', track: "MC", department: "Mansuora" },
    { id: "2", name: "Nana", image: 'images/2.jpg', track: "PD", department: "Cairo" },
    { id: "3", name: "Fifi", image: 'images/3.jpg', track: "AI", department: "Alex" },
  ]);

  // let [departmentList, setDepartmentList] = useState([
  //   { id: "1", name: "Mansuora", location: "Mansoura" },
  //   { id: "2", name: "Cairo", location: "Cairo" },
  //   { id: "3", name: "Alex", location: "Alex" },
  // ]);

  const AddStudentHandler = (_object) => {
    //clone
    let StudentArray = studentList;
    //pushing
    StudentArray.push(_object);
    //updating
    setStudentList(StudentArray);
  };

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div class="row g-0 m-2">
          <div class="col-12 p-2" id='main'>
            <Routes>
              <Route path="/Student" element={<StudentList _Data={studentList} />} />
              <Route path="/AddStudent" element={<AddStudent AddRef={AddStudentHandler} />} />
              <Route path="/Details/:id" element={<DetailsStudent ArrayRef={studentList} />} />
              <Route path="/EditStudent/:id" element={<EditStudent ArrayRef={studentList} />} />

              {/* <Route path="/Department/*" element={<Department _Data={departmentList} />} /> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );

}

export default App
