import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Store } from '../Store';
import { getError } from '../utils';
import { USER_SIGNOUT } from '../constants/actionTypes'; // Import action type

function Header() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: USER_SIGNOUT });
    localStorage.removeItem('userInfo');
    window.location.href = '/signin';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userInfo && userInfo.token) {
          // Add any fetch logic here if needed
        }
      } catch (err) {
        toast.error(getError(err));
      }
    };

    fetchData();
  }, [userInfo]);

  return (
    <header>
      <ToastContainer position='bottom-center' limit={1} />
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
                <i className='fas fa-layer-group'></i> Web Design
              </Nav.Link>
            </LinkContainer>

            {/* Dropdown */}
            <NavDropdown title='Deployment' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/#'>########</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/mernRender'>
                Mern Render
              </NavDropdown.Item>
            </NavDropdown>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id='user-nav-dropdown'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <Link
                  className='dropdown-item'
                  to='#signout'
                  onClick={signoutHandler}
                >
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link className='nav-link' to='/signin'>
                <i className='fas fa-sign-in-alt'></i> Sign In
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='admin-nav-dropdown'>
                <LinkContainer to='/admin/dashboard'>
                  <NavDropdown.Item>Website Dashboard</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/users'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/websites'>
                  <NavDropdown.Item>Websites</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/messages'>
                  <NavDropdown.Item>Messages</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
