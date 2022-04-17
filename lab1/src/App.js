/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

import StudentList from './Components/Student/Student.jsx'
import AddStudent from './Components/Student/add.jsx';
import DetailsStudent from './Components/Student/details.jsx';
import EditStudent from './Components/Student/edit.jsx'

import Department from './Components/Department/Departments.jsx'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      studentList: [
        { id: "1", name: "Mrym", image: 'images/4.jpg', track: "MC", department: "Mansuora" },
        { id: "2", name: "Nana", image: 'images/2.jpg', track: "PD", department: "Cairo" },
        { id: "3", name: "Fifi", image: 'images/3.jpg', track: "AI", department: "Alex" },
      ],
      departmentList: [
        { id: "1", name: "Mansuora", location: "Mansoura" },
        { id: "2", name: "Cairo", location: "Cairo" },
        { id: "3", name: "Alex", location: "Alex" },
      ]
    }
  }

  AddStudentHandler = (_object) => {
    //clone
    let StudentArray = this.state.studentList;
    //pushing
    StudentArray.push(_object);
    console.log(StudentArray)
    //updating
    this.setState(StudentArray);
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Header></Header>
          <div class="row g-0 m-2">
            <div class="col-12 p-2" id='main'>
              <Route path="/Student" component={(props) => (
                <StudentList
                  _Data={this.state.studentList}
                  browserdata={props}
                  {...props}
                />
              )} />
              <Route path="/AddStudent" component={(props) => <AddStudent AddRef={this.AddStudentHandler} {...props} />} />
              <Route path="/Details/:id" component={(props) => <DetailsStudent ArrayRef={this.state.studentList} {...props} />} />
              <Route path="/EditStudent/:id" component={(props) => <EditStudent ArrayRef={this.state.studentList} {...props} />} />

              <Route path="/Department" component={(props) => (
                <Department
                  _Data={this.state.departmentList}
                  browserdata={props}
                  {...props}
                />
              )} />
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
