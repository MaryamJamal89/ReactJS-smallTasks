import React from "react";
import { Link } from "react-router-dom";

export default class AddDepartment extends React.Component {
    state = {
        _Id: "",
        _Name: "",
        _Location: "",
    };

    customAdd = (e) => {
        //preventDefault form ==>
        e.preventDefault();
        //create object ==> state
        let newObject = {
            id: this.state._Id,
            name: this.state._Name,
            location: this.state._Location,
        };
        //calling handler ==> props routing ==> AppRouter
        this.props.AddRef(newObject);
        //navigation to Department List
        this.props.history.push("/Department/ListDepartment");
    };

    AddDepartmentHandler = (_object) => {
        //clone
        let DepartmentArray = this.state.departmentList;
        //pushing
        DepartmentArray.push(_object);
        console.log(DepartmentArray)
        //updating
        this.setState(DepartmentArray);
      };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.customAdd}>
                    <table class="table table-borderless">
                        <tr>
                            <th>ID</th>
                            <td>
                                <input
                                    className="form-control m-2"
                                    value={this.state._Id}
                                    onChange={(e) => this.setState({ _Id: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>
                                <input
                                    className="form-control m-2"
                                    value={this.state._Name}
                                    onChange={(e) => this.setState({ _Name: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>
                                <input
                                    className="form-control m-2"
                                    value={this.state._Location}
                                    onChange={(e) => this.setState({ _Location: e.target.value })}
                                />
                            </td>
                        </tr>                        
                        <tr>
                            <td colSpan={2}>
                                <input
                                    type="submit"
                                    className="btn btn-outline-success w-100 m-2"
                                    value="New Department"
                                />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}

