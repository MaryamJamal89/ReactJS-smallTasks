import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="navbar-brand m-2">
                    <i class="fa fa-solid fa-gem fa-2xl m-1"></i> ReactJS Lab
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link active" aria-current="page" to="/Home">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/Student">
                                Student
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/Department/ListDepartment">
                                Department
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header;