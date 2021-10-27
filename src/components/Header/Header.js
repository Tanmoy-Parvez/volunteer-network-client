import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'

const Header = () => {
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
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Donations</Nav.Link>
                        <Nav.Link href="#pricing">Events</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Link to="/login">
                            <button className="btn btn-primary ms-2">Register</button>
                        </Link>
                        <button className="btn btn-dark ms-2">Admin</button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;