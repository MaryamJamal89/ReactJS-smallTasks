import React from "react";

export default class AddStudent extends React.Component {
    state = {
        _Id: "",
        _Name: "",
        _Track: "",
        _Department: "",
        _Img: "",
    };

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    AddStudent = () => {
        let newObject = {
            id: this.state._Id,
            name: this.state._Name,
            image: this.state._Img,
            track: this.state._Track,
            department: this.state._Department,
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
                        <th scope="col">Track</th>
                        <th scope="col">Department</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>                            
                            <input
                                type="text"
                                value={this.state._id}
                                onChange={this.inputChangeHandler}
                                name="_id"
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
                                name="_Track"
                                type="text"
                                value={this.state._Track}
                                onChange={(e) => this.setState({ _Track: e.target.value })}
                            />
                        </td>
                        <td>
                            <input
                                name="_Department"
                                type="text"
                                value={this.state._Department}
                                onChange={(e) => this.setState({ _Department: e.target.value })}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={this.state._Img}
                                onChange={this.inputChangeHandler}
                                name="_Img"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={5}>
                            <button className="btn btn-outline-success w-100 m-2" onClick={this.AddStudent}>
                                Submit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
