// ./assets/js/components/Home.js
import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Users from '../Users/Users';
import Posts from '../Posts/Posts';

const Home = (props) => {
    return (
        <>
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/posts"}> Posts </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/users"}> Users </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="/posts" element={<Posts/>}/>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default Home;