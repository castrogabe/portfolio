import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar className='header' variant='dark' expand='lg'>
      <LinkContainer to='/'>
        <Navbar.Brand>
          <i className='fas fa-home'></i> My Portfolio
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto  w-100  justify-content-end'>
          <LinkContainer to='/about'>
            <Nav.Link>
              <i className='fas fa-info'></i> About
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to='/portfolio'>
            <Nav.Link>
              <i className='fas fa-briefcase'></i> Portfolio
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to='/webdesign'>
            <Nav.Link>
              <i class='fas fa-layer-group'></i> Web Design
            </Nav.Link>
          </LinkContainer>

          {/* Dropdown */}
          <NavDropdown title='Deployment' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/#'>########</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href='/mernRender'>Mern Render</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
