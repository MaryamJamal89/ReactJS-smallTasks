import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const AddStudent = (props) => {
    let [_Id, setId] = useState("");
    let [_Name, setName] = useState("");
    let [_Track, setTrack] = useState("");
    let [_Department, setDepartment] = useState("");
    let [_Img, setImg] = useState("");

    let navigation = useNavigate();

    let customAdd = (e) => {
        //preventDefault form ==>
        e.preventDefault();
        //create object ==> state
        let newObject = {
            id: _Id,
            name: _Name,
            track: _Track,
            department: _Department,
            img: _Img,
        };
        //calling handler ==> props routing ==> AppRouter
        props.AddRef(newObject);
        //navigation to Student List
        navigation("/Student");
    };

    return (
        <div className="container">
            <form onSubmit={customAdd}>
                <table class="table table-borderless">
                    <tr>
                        <th>ID</th>
                        <td>
                            <input
                                className="form-control m-2"
                                name="_Id"
                                value={_Id}
                                onChange={(e) => setId(e.target.value)}
                            />
                            <div
                                class="text-danger"
                                style={{
                                    display: "none",
                                }}
                            >
                                ID is Empty
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>
                            <input
                                className="form-control m-2"
                                name="_Name"
                                value={_Name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Track</th>
                        <td>
                            <input
                                className="form-control m-2"
                                name="_Track"
                                value={_Track}
                                onChange={(e) => setTrack(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Department</th>
                        <td>
                            <input
                                className="form-control m-2"
                                name="_Department"
                                value={_Department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Image</th>
                        <td>
                            <input
                                className="form-control m-2"
                                name="_Img"
                                value={_Img}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="submit"
                                className="btn btn-outline-success w-100 m-2"
                                value="New Student"
                            />
                        </td>
                        <td>
                            <Link className="btn btn-outline-info w-100 m-2" to="/Student">
                                Back To Student List
                            </Link>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default AddStudent
