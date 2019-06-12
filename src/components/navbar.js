import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Home from '../routes/home'
import About from '../routes/about'
import Services from '../routes/services'
import Contact from '../routes/contact'

class NavBar extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="dark" variant = "dark" expand="lg">
                    <Navbar.Brand href="#home">Horizen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                            <Link to="/about/"><Nav.Link href="#about">About</Nav.Link></Link>
                            <Link to="/services/"><Nav.Link href="#services">Services</Nav.Link></Link>
                            <Link to="/contact/"><Nav.Link href="#contact">Contact</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/services/" component={Services} />
                <Route path="/contact/" component={Contact} />
            </Router>
        )
    }
}

export default NavBar