import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';

function WebDesign() {
  return (
    <>
      <div class='keyboard'>
        <img id='image' src='/images/keyBoard.jpg' width='100%' alt='' />
      </div>
      <br />

      <div className='content'>
        <Helmet>
          <title>Web Design</title>
        </Helmet>

        {/* design image on right text on left  */}
        <Row>
          <Col md={6}>
            <div className='box'>
              <h4>Web Design</h4>
              <ol>
                <li>
                  The process of designing a website: email me to schedule an
                  appointment in Inland Empire. If a physical appointment is not
                  necessary we can chat about your vision.
                </li>

                <li>
                  I will produce a written quote based on your vision and amount
                  of revisions.
                </li>

                <li>
                  I will produce a design concept of your website before any
                  coding is done and you are happy with the design.
                </li>
              </ol>
              <hr />

              <h4>Web Development</h4>
              <p>
                Programming Knowledge of Html5, CSS3, JavaScript, Angular,
                React, PHP, MySQL, and (SEO) Search Engine Optimization to help
                your clients find you on the web.
              </p>

              <ol>
                <li>
                  I will program your website using code that is easy to read.
                </li>
                <li>
                  I test the code in my web browser to be sure everything flows
                  and reads correctly.
                </li>
                <li>
                  I design for mobile devices first then the computer last since
                  most transactions are cell phone driven.
                </li>
                <li>
                  I stand behind my coding and product that I release to you.
                </li>
                <li>
                  You will get a email of all the coding files that you have
                  from your website design.
                </li>
              </ol>
            </div>
          </Col>
          <Col md={6}>
            <div className='box'>
              <img src='/images/design.png' alt='' className='img-portfolio' />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WebDesign;
