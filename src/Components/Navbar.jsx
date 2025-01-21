import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavbarPage = ({setCategory}) => {
  return (
    <Navbar expand="lg" className="bg-transparent shadow-lg position fixed mt-3 mx-2" data-bs-theme ="dark">
      <Container>
        <Navbar.Brand href="#home"><span className="badge bg-light text-dark fs-4">News Apss</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCategory("technology")}>Technology</Nav.Link>
            <Nav.Link onClick={() => setCategory("business")}>Business</Nav.Link>
            <Nav.Link onClick={() => setCategory("health")}>Health</Nav.Link>
            <Nav.Link onClick={() => setCategory("sports")}>Sports</Nav.Link>
            <Nav.Link onClick={() => setCategory("entertainment")}>Entertainment</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPage
