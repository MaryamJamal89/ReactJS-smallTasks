import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

export default class EditStudent extends React.Component {
    state = {
        _Id: "",
        _Name: "",
        _Track: "",
        _Department: "",
        _Img: "",
    };

    async componentDidMount() {
        //Filter with id ==> params
        let id = this.props.match.params.id;
        console.log(id)

        //get Array
        let _SelectedObject = this.props.ArrayRef.filter((item) => {
            return item.id === id;
        });
        console.log(_SelectedObject)

        this.setState({
            _Id: _SelectedObject[0].id,
            _Name: _SelectedObject[0].name,
            _Track: _SelectedObject[0].track,
            _Department: _SelectedObject[0].department,
            _Img: _SelectedObject[0].image,
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
        let _SelectedObject = this.props.ArrayRef.filter((item) => {
            return item.id === id;
        });
        console.log(_SelectedObject)  
        
        _SelectedObject[0].name = this.state._Name;
        _SelectedObject[0].track = this.state._Track;
        _SelectedObject[0].department = this.state._Department;

        //navigation to Student List
        this.props.history.push("/Student");
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
                                <th scope="col">Track</th>
                                <td>
                                    <input
                                        className="form-control m-2"
                                        value={this.state._Track}
                                        onChange={(e) => this.setState({ _Track: e.target.value })}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th scope="col">Department</th>
                                <td>
                                    <input
                                        className="form-control m-2"
                                        value={this.state._Department}
                                        onChange={(e) => this.setState({ _Department: e.target.value })}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">Image</th>
                                <td>
                                    <img
                                        class="m-2"
                                        src={this.state._Img}
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
}
