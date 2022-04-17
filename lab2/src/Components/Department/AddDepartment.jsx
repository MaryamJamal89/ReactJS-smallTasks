import React from "react";

export default class AddDepartment extends React.Component {
    state = {
        _Id: "",
        _Name: "",
        _Location: "",
    };

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    AddDepartment = () => {
        let newObject = {
            id: this.state._Id,
            name: this.state._Name,
            location: this.state._Location,
        };
        this.props.AddRefHandler(newObject);
    };

    render() {
        return (
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={this.state._id}
                                onChange={this.inputChangeHandler}
                                name="_Id"
                            />
                        </td>
                        <td>
                            <input
                                name="_Name"
                                type="text"
                                value={this.state._Name}
                                onChange={(e) => this.setState({ _Name: e.target.value })}
                            />
                        </td>
                        <td>
                            <input
                                name="_Location"
                                type="text"
                                value={this.state._Location}
                                onChange={(e) => this.setState({ _Location: e.target.value })}
                            />
                        </td>                        
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <button className="btn btn-outline-success w-100 m-2" onClick={this.AddDepartment}>
                                Submit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
