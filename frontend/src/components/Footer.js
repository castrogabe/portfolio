import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <Row>
        <Col md={4}>
          Stay in touch
          <div className='socialIcon'>
            <ul className='list-unstyled'>
              <li>
                <Link
                  to='https://www.facebook.com/'
                  className='facebookIcon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-facebook'></i> Facebook
                </Link>
              </li>

              <li>
                <Link
                  to='https://www.youtube.com/channel/'
                  className='youtubeIcon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-youtube'></i> YouTube
                </Link>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={4}>
          Get To Know Us
          <div className='socialIcon'>
            <ul className='list-unstyled'>
              <li>
                <Link to='/about' className='email'>
                  {' '}
                  <i className='fa fa-info'></i> About Us
                </Link>
              </li>
              <li>
                <Link to='/#' className='email'>
                  {' '}
                  <i className='fa fa-info'></i> #
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          Questions
          <div className='socialIcon'>
            <ul className='list-unstyled'>
              <Link to='/contact' className='email'>
                <i className='fa fa-envelope'></i> Contact Us
              </Link>

              <li>
                <Link to='/questions' className='email'>
                  {' '}
                  <i className='fa fa-info'></i> Questions Asked
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
