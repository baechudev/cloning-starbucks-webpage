import { Button, Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

import mainLogo from "../img/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        variant="light"
        className="navbar-custom"
      >
        <Navbar.Brand href="#home">
          <img src={mainLogo} alt="mainLogo" className="mainLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#menu">MENU</Nav.Link>
            <Nav.Link href="#rewards">REWARDS</Nav.Link>
            <Nav.Link href="#giftcard">GIFT CARDS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#locations">
              <Button variant="light">Find a store</Button>
            </Nav.Link>
            <Nav.Link href="#signin">
              <Button variant="light">Sign in</Button>
            </Nav.Link>
            <Nav.Link href="#signup">
              <Button variant="light">Join now</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
