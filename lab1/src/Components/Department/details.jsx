import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

export default class DetailsDepartment extends React.Component {
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

        this.setState({
            _Id: _SelectedObject[0].id,
            _Name: _SelectedObject[0].name,
            _Location: _SelectedObject[0].location,
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
                            <th scope="col">Location</th>
                            <td>
                                <label className="m-2">{this.state._Location}</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
