import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const LinkStyle = {
  color: 'white',
  textDecoration: 'none'
}

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={LinkStyle}> Shopee </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 d-flex justify-content-end"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="mx-lg-4">
                <FontAwesomeIcon icon={faShoppingCart} /> <Link to="/cart" style={LinkStyle}>Cart</Link>
              </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon icon={faUser} /> <Link to="/login" style={LinkStyle}>Sign In</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;