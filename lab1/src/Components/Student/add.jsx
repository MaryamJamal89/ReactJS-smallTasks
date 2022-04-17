import React from "react";
import { Link } from "react-router-dom";

export default class AddStudent extends React.Component {
    state = {
        _Id: "",
        _Name: "",
        _Track: "",
        _Department: "",
        _Img: "",
    };

    customAdd = (e) => {
        //preventDefault form ==>
        e.preventDefault();
        //create object ==> state
        let newObject = {
            id: this.state._Id,
            name: this.state._Name,
            track: this.state._Track,
            department: this.state._Department,
            img: this.state._Img,
        };
        //calling handler ==> props routing ==> AppRouter
        this.props.AddRef(newObject);
        //navigation to Student List
        this.props.history.push("/Student");
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
                            <th>Track</th>
                            <td>
                                <input
                                    className="form-control m-2"
                                    value={this.state._Track}
                                    onChange={(e) => this.setState({ _Track: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Department</th>
                            <td>
                                <input
                                    className="form-control m-2"
                                    value={this.state._Department}
                                    onChange={(e) => this.setState({ _Department: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Image</th>
                            <td>
                                <input
                                    className="form-control m-2"
                                    value={this.state._Img}
                                    onChange={(e) => this.setState({ _Img: e.target.value })}
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
}

