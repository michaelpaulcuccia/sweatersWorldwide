import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavieBar = () => {

    return (
        <Navbar variant='dark' bg="dark" expand="lg">
            <Navbar.Brand href="#home">Sweaters Worldwide</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Choose Styles" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Style-1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Style-2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Style-3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Custom Styles</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavieBar