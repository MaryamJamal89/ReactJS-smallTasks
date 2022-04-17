import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Modal from 'react-modal';

export default class ListDepartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DptArray: props._Data,
        };
        this.RemoveFromList = this.RemoveFromList.bind(this);
    }

    RemoveFromList = (_index) => {
        let cloneArray = this.state.DptArray;
        cloneArray.splice(_index, 1);
        this.setState({
            DptArray: cloneArray
        })
    };

    render() {
        return (
            <>
                <div className="container" >
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className='align-middle text-center'>ID</th>
                                <th scope="col" className='align-middle text-center'>Name</th>
                                <th scope="col" className='align-middle text-center'>Location</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.DptArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='align-middle text-center'>{item.id}</td>
                                        <td className='align-middle text-center'>{item.name}</td>
                                        <td className='align-middle text-center'>{item.location}</td>
                                        <td className='align-middle text-center'>
                                            <button className="btn btn-danger m-1" onClick={() => { if (window.confirm('Delete the item?')) { this.RemoveFromList() }; }}>Remove</button>
                                            <Link className="btn btn-primary m-1" to={`/Department/EditDepartment/${item.id}`}>Edit</Link>
                                            <Link className="btn btn-secondary m-1" to={`/Department/DetailsDepartment/${item.id}`}>Details</Link>
                                        </td>
                                    </tr>
                                )
                            })}                            
                        </tbody>
                    </table>
                </div>

            </>
        )
    }
}
