import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavieBar = () => {

    return (
        <Navbar variant='dark' bg="dark" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand >Sweaters Worldwide</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Choose Styles" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to='/sweaterfit'>By Fit</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/sweaterseason'>By Season</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavieBar