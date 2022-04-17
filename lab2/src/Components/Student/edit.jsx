import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

const EditStudent = (props) => {
    let [_Id, setId] = useState("");
    let [_Name, setName] = useState("");
    let [_Track, setTrack] = useState("");
    let [_Department, setDepartment] = useState("");
    let [_Img, setImg] = useState("");

    let params = useParams();
    let navigation = useNavigate();

    useEffect(() => {
        async function initObj () {
            //Filter with id ==> params
            let id = params.id;
            //get Array
            let _SelectedObject = props.ArrayRef.filter((item) => {
                return item.id === id;
            });

            setId(_SelectedObject[0].id)
            setName(_SelectedObject[0].name)
            setTrack(_SelectedObject[0].track)
            setDepartment(_SelectedObject[0].department)
            setImg(_SelectedObject[0].image)
        }
        initObj()
    }, [])

    let customEdit = (e) => {
        //preventDefault form ==>
        e.preventDefault();
        //Filter with id ==> params
        let id = params.id;
        //get Array
        let _SelectedObject = props.ArrayRef.filter((item) => {
            return item.id === id;
        });

        _SelectedObject[0].name = _Name;
        _SelectedObject[0].track = _Track;
        _SelectedObject[0].department = _Department;

        //navigation to Student List
        navigation("/Student");
    };

    return (
        <div className="container" >
            <form onSubmit={customEdit}>
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <th scope="col">ID</th>
                            <td>
                                <label className="m-2">{_Id}</label>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Name</th>
                            <td>
                                <input
                                    className="form-control m-2"
                                    value={_Name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Track</th>
                            <td>
                                <input
                                    className="form-control m-2"
                                    value={_Track}
                                    onChange={(e) => setTrack(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <th scope="col">Department</th>
                            <td>
                                <input
                                    className="form-control m-2"
                                    value={_Department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Image</th>
                            <td>
                                <img
                                    class="m-2"
                                    src={_Img}
                                    style={{
                                        width: 100,
                                        height: 75,
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="submit"
                                    className="btn btn-outline-success w-100 m-2"
                                    value="Edit Student"
                                />
                            </td>
                            <td>
                                <Link className="btn btn-outline-info w-100 m-2" to="/Student">
                                    Back To Student List
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default EditStudent
