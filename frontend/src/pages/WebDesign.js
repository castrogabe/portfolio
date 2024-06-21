import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function WebDesign() {
  return (
    <>
      <div className='keyboard'>
        <img
          id='image'
          src='/images/keyBoard.jpg'
          width='100%'
          alt='Keyboard'
        />
      </div>
      <br />

      <div className='content'>
        <Helmet>
          <title>Web Design</title>
        </Helmet>

        <Row>
          <Col md={6}>
            <div className='box'>
              <h4>Web Design</h4>
              <ol>
                <li>
                  The process of designing a website: email me to schedule an
                  appointment in [your area]. If a physical appointment is not
                  necessary, we can chat about your vision.
                </li>
                <li>
                  I will produce a written quote based on your vision and the
                  number of revisions.
                </li>
                <li>
                  I will produce a design concept of your website before any
                  coding is done and ensure you are happy with the design.
                </li>
              </ol>
              <hr />

              <h4>Web Development</h4>
              <p>
                I have programming knowledge in HTML5, CSS3, JavaScript,
                Angular, React, PHP, MySQL, and SEO (Search Engine Optimization)
                to help your clients find you on the web.
              </p>
              <ol>
                <li>
                  I will program your website using code that is clean and easy
                  to read.
                </li>
                <li>
                  I test the code in my web browser to ensure everything flows
                  and reads correctly.
                </li>
                <li>
                  I design for mobile devices first, then for desktop, as most
                  transactions are mobile-driven.
                </li>
                <li>
                  I stand behind the code and product that I release to you.
                </li>
                <li>
                  You will receive an email containing all the coding files from
                  your website design.
                </li>
              </ol>
              <Link to='/contact'>
                <button className='btn btn-primary mt-3'>
                  Contact for Quote
                </button>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className='box'>
              <img
                src='/images/design.png'
                alt='Web Design'
                className='img-portfolio'
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WebDesign;
