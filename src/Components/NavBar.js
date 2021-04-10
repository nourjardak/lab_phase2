import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useSelector } from "react-redux";


const NavBar = () => {
  const myList = useSelector(state => state.BookReducer.myList)
  const total = useSelector(state => state.BookReducer.total)
  console.log(myList)
  return (
    <div>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Navbar.Brand href="#home">BOOKWORM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
            <NavDropdown title="Genres" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Historical</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mystery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="My BookList" id="basic-nav-dropdown">
              {myList.map(title=><NavDropdown.Item href="#action/3.3" >{title}</NavDropdown.Item>)}
            </NavDropdown>
            <Nav.Link href="#home">{`Total: ${total}$`}</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
