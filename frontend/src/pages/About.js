import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className='content'>
        <br />
        <Row>
          <Col md={6} className='box'>
            <h4>About Me</h4>
            <p>
              [Your Name] a graduate from [Your School] Technology I Learned how
              to build web applications using JavaScript AngularJS, ReactJS
              library's. Acquired skills to build database-driven web
              applications using SQL, NoSQL, MongoDB, AWS, and create richly
              interactive client - side apps using JavaScript React library.
            </p>
            <br />

            <p>
              Programming Knowledge of Html5, CSS3, JavaScript, PHP, MySQL, and
              (SEO) Search Engine Optimization to help your clients find you on
              the web.
            </p>
            <br />

            <p>
              [Your Name] Web Development is a small home based web design
              company based [Your Area]. I can create unique eye catching
              websites for your online presence, if your company looking to
              upgrade your business website by adding more pages or dynamic
              features or a Wordpress websites or just want to link your Social
              Media to your web page. No job is too big or too small.
            </p>
            <br />

            <p>
              I service the [Your Area] or anywhere else there is an Internet
              connection.
            </p>
            <br />

            <p>
              To contact [Your Name] for a consultation, quote, or any questions
              you may have, you can email me from link on top. I code, design
              and host the website to your satisfaction and most importantly
              communicate with you every step of the way.
            </p>
          </Col>

          <br />
          <Col md={6} className='box'>
            <img src='/images/cert.png' alt='' className='img-portfolio' />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
