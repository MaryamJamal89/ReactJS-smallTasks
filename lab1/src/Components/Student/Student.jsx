import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Modal from 'react-modal';

export default class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            StdArray: props._Data,
        };
        this.RemoveFromList = this.RemoveFromList.bind(this);
    }

    RemoveFromList = (_index) => {
        let cloneArray = this.state.StdArray;
        cloneArray.splice(_index, 1);
        this.setState({
            StdArray: cloneArray
        })
    }

    render() {
        if (this.state.StdArray.length > 0) {
            return (
                <div className="col-12" >
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className='align-middle text-center'>ID</th>
                                <th scope="col" className='align-middle text-center'>Name</th>
                                <th scope="col" className='align-middle text-center'>Track</th>
                                <th scope="col" className='align-middle text-center'>Department</th>
                                <th scope="col" className='align-middle text-center'>Image</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.StdArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='align-middle text-center'>{item.id}</td>
                                        <td className='align-middle text-center'>{item.name}</td>
                                        <td className='align-middle text-center'>{item.track}</td>
                                        <td className='align-middle text-center'>{item.department}</td>
                                        <td className='align-middle text-center'>
                                            <img
                                                src={item.image}
                                                style={{
                                                    width: 100,
                                                    height: 75,
                                                }}
                                            />
                                        </td>
                                        <td className='align-middle text-center'>
                                            <button className="btn btn-danger m-1" onClick={() => {if(window.confirm('Delete the item?')){this.RemoveFromList()};}}>Remove</button>
                                            <Link className="btn btn-primary m-1" to={`/EditStudent/${item.id}`}>Edit</Link>
                                            <Link className="btn btn-secondary m-1" to={`/Details/${item.id}`}>Details</Link>
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={6}>
                                    <Link to="/AddStudent" className="btn btn-outline-success w-100 m-2">
                                        Add new Student
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            return (
                <div className="col-12" >
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    No Data
                                </td>
                            </tr>
                            <td colSpan={6}>
                                <Link to="/AddStudent" className="btn btn-outline-success w-100 m-2">
                                    Add new Student
                                </Link>
                            </td>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
