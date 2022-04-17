import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

export default class EditDepartment extends React.Component {
    state = {
        _Id: "",
        _Name: "",
        _Location: "",
    };

    async componentDidMount() {
        //Filter with id ==> params
        let id = this.props.match.params.id;
        console.log(id)

        //get Array
        let _SelectedObject = this.props._Data.filter((item) => {
            return item.id === id;
        });
        console.log(_SelectedObject)

        this.setState({
            _Id: _SelectedObject[0].id,
            _Name: _SelectedObject[0].name,
            _Location: _SelectedObject[0].location,
        });
        console.log(this.state)
    }

    customEdit = (e) => {
        //preventDefault form ==>
        e.preventDefault();
        //Filter with id ==> params
        let id = this.props.match.params.id;
        console.log(id)

        //get Array
        let _SelectedObject = this.props._Data.filter((item) => {
            return item.id === id;
        });
        console.log(_SelectedObject)  
        
        _SelectedObject[0].name = this.state._Name;
        _SelectedObject[0].location = this.state._Location;

        //navigation to Department List
        this.props.history.push("/Department/ListDepartment");
    };

    render() {
        return (
            <div className="container" >
                <form onSubmit={this.customEdit}>
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <th scope="col">ID</th>
                                <td>
                                    <label className="m-2">{this.state._Id}</label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">Name</th>
                                <td>
                                    <input
                                        className="form-control m-2"
                                        value={this.state._Name}
                                        onChange={(e) => this.setState({ _Name: e.target.value })}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">Location</th>
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
                                        value="Edit Department"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
