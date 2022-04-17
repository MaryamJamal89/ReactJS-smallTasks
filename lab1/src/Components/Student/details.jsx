import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

export default class DetailsStudent extends React.Component {
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

        this.setState({
            _Id: _SelectedObject[0].id,
            _Name: _SelectedObject[0].name,
            _Track: _SelectedObject[0].track,
            _Department: _SelectedObject[0].department,
            _Img: _SelectedObject[0].image,
        });
    }

    render() {
        return (
            <div className="container" >
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
                                <label className="m-2">{this.state._Name}</label>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Track</th>
                            <td>
                                <label className="m-2">{this.state._Track}</label>
                            </td>
                        </tr>

                        <tr>
                            <th scope="col">Department</th>
                            <td>
                                <label className="m-2">{this.state._Department}</label>
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
}
