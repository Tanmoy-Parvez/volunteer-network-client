import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logos/Group 1329.png';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light" className="fixed-top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="120"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="ms-auto nav-item">
                        <Nav.Link href="">
                            <Link to="/home">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="">
                            <Link to="/events">
                                Events
                            </Link>
                        </Nav.Link>

                        {user?.email ?
                            <div className="d-flex">
                                <Nav.Link>
                                    <Link to="/home" className="text-success">
                                        {user?.displayName}
                                    </Link>
                                </Nav.Link>
                                <button onClick={logOut} className="btn btn-danger ms-2"><i className="fas fa-sign-out-alt"></i></button>
                            </div>
                            :
                            <Link to="/login">
                                <button className="btn btn-primary ms-2">Login</button>
                            </Link>
                        }
                        <Link to="/registerForm">
                            <button className="btn btn-dark ms-2">Register</button>
                        </Link>
                        <Link to="/admin">
                            <button className="btn btn-dark ms-2">Admin</button>
                        </Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;