import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

const DetailsStudent = (props) => {
    let [_Id, setId] = useState("");
    let [_Name, setName] = useState("");
    let [_Track, setTrack] = useState("");
    let [_Department, setDepartment] = useState("");
    let [_Img, setImg] = useState("");

    let params = useParams();

    useEffect(() => {
        async function initObj() {
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

    return (
        <div className="container" >
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
                            <label className="m-2">{_Name}</label>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col">Track</th>
                        <td>
                            <label className="m-2">{_Track}</label>
                        </td>
                    </tr>

                    <tr>
                        <th scope="col">Department</th>
                        <td>
                            <label className="m-2">{_Department}</label>
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
                        <td colSpan={2}>
                            <Link className="btn btn-outline-info w-100 m-2" to="/Student">
                                Back To Student List
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailsStudent
