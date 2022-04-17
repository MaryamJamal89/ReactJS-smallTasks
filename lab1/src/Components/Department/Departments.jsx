import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Modal from 'react-modal';

import AddDepartment from './add.jsx'
import ListDepartment from './list'
import EditDepartment from './edit'
import DetailsDepartment from './details'

export default class Department extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DptArray: props._Data,
        };
        this.RemoveFromList = this.RemoveFromList.bind(this);
    }

    AddDepartmentHandler = (objectParam) => {
        //clone ==> Array of State
        let CloneArray = this.state.DptArray;
        CloneArray.push(objectParam);
        //setState ==> array ==> clone after change
        this.setState({
            DptArray: CloneArray,
        });
    };

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
                <div className="row">
                    <div className="col-2 bg-dark text-center">
                        <Link to="/Department/ListDepartment" className="btn btn-secondary w-100 mt-2">
                            List Department
                        </Link>
                        <Link to="/Department/AddDepartment" className="btn btn-secondary w-100 mt-2">
                            New Department
                        </Link>
                    </div>
                    <div className="col-10" >
                        <Route path="/Department/AddDepartment" component={(props) => <AddDepartment AddRef={this.AddDepartmentHandler} {...props} />} />
                        <Route path="/Department/ListDepartment" component={(props) => <ListDepartment _Data={this.state.DptArray} {...props} />} />
                        <Route path="/Department/EditDepartment/:id" component={(props) => <EditDepartment _Data={this.state.DptArray} {...props} />} />
                        <Route path="/Department/DetailsDepartment/:id" component={(props) => <DetailsDepartment _Data={this.state.DptArray} {...props} />} />
                    </div>
                </div>
            </>
        )
    }
}
