import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import '../styles/navbar.css'
import logo from '../images/logo1.png'

class NavBar extends Component {
    render() {
        return (
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand href="#home" className="navbar-brand">
                        <img 
                        src={logo}
                        width="220"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="nav-class">
                            <Nav.Item>
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="services">Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default NavBar