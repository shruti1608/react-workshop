import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <NavLink eventKey="1" as={Link} to="/">
            Home
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/contactus">
            Contact
          </NavLink>
          <NavLink eventKey="3" as={Link} to="/aboutus">
            About
          </NavLink>
        </Nav>
        <Nav>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="contactus">Contact Us</NavDropdown.Item>
            <NavDropdown.Item href="aboutus">About Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
