import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const MernRender = () => {
  return (
    <>
      <Helmet>
        <title>MERN Render</title>
      </Helmet>
      <Container className='content'>
        <br />
        <div className='box'>
          <h1>MERN Stack on Render</h1>
        </div>

        <Row md={12} className='box'>
          <h1>MongoDB Network access</h1>
          <h4>
            <strong>
              <span style={{ color: 'blue' }}>+ ADD IP ADDRESS</span>
            </strong>
          </h4>
          <img
            src='/images/network access.png'
            alt='network access'
            className='img-fluid'
          />
        </Row>

        <Row md={12} className='box'>
          <h1>Allow Access From Anywhere</h1>
          <h4>0.0.0.0/0</h4>
          <h4>all</h4>
          <img
            src='/images/allow access.png'
            alt='access'
            className='img-fluid'
          />
        </Row>

        <Row md={12} className='box'>
          <h1>Allow Access From Anywhere</h1>
          <h4>0.0.0.0/0</h4>
          <h4>all</h4>
          <img
            src='/images/whitelist.png'
            alt='whitelist'
            className='img-fluid'
          />
        </Row>

        <Row md={12} className='box'>
          <h1>Network Access</h1>
          <img
            src='/images/network access all.png'
            alt='access'
            className='img-fluid'
          />
        </Row>

        <hr />

        <Row md={12} className='box'>
          <h1>Render Dashboard</h1>
          <h4>
            <strong>
              Create new Project<span style={{ color: 'blue' }}> New +</span>
            </strong>
          </h4>
          <img
            src='/images/dashboard.png'
            alt='dashboard'
            className='img-fluid'
          />
        </Row>

        <Row md={12} className='box'>
          <h1>Web Service</h1>
          <img
            src='/images/web service.png'
            alt='web service'
            className='img-fluid'
          />
        </Row>

        <Row md={12} className='box'>
          <h1>Build and Deploy from a Git repository</h1>
          <img
            src='/images/git repository.png'
            alt='git'
            className='img-fluid'
          />
        </Row>

        <Row md={12} className='box'>
          <h1>Connect a repository {'>'} select your git repository project</h1>
          <p>Select connect</p>
          <img
            src='/images/repository.png'
            alt='repository'
            className='img-fluid'
          />
        </Row>

        <Row md={12} className='box'>
          <h1>
            Name:{' '}
            <strong>
              <span style={{ color: 'blue' }}>antiquepox</span>
            </strong>
          </h1>
          <h1>
            Region:{' '}
            <strong>
              <span style={{ color: 'blue' }}>Oregon (US West)</span>
            </strong>
          </h1>
          <h1>
            Branch:{' '}
            <strong>
              <span style={{ color: 'blue' }}>main</span>
            </strong>
          </h1>
          <img src='/images/name.png' alt='name' className='img-fluid' />
        </Row>

        <Row md={12} className='box'>
          <h1>
            Root Directory Optional:{' '}
            <strong>
              <span style={{ color: 'blue' }}>blank</span>
            </strong>
          </h1>
          <h1>
            Runtime:{' '}
            <strong>
              <span style={{ color: 'blue' }}>Node</span>
            </strong>
          </h1>
          <h1>
            Build Command:{' '}
            <strong>
              <span style={{ color: 'blue' }}>npm run build</span>
            </strong>
          </h1>
          <h1>
            Start Command:{' '}
            <strong>
              <span style={{ color: 'blue' }}>npm start</span>
            </strong>
          </h1>
          <img src='/images/start.png' alt='start' className='img-fluid' />
        </Row>

        <Row md={12} className='box'>
          <h1>Instance Type: Free or Starter</h1>
          <h4>
            Paid for a live website{' '}
            <strong>
              <span style={{ color: 'blue' }}> Starter 512 MB (RAM)</span>
              <span style={{ color: 'red' }}> 2024</span>
            </strong>
          </h4>
          <img
            src='/images/instance.png'
            alt='instance'
            className='img-fluid'
          />
        </Row>

        <Row md={12} className='box'>
          <h1>
            + Environment Variables: Add two environment variables
            <strong>
              <span style={{ color: 'blue' }}> JWT_SECRET - MONGODB_URI</span>
            </strong>
          </h1>
          <img
            src='/images/2 variables.png'
            alt='variables'
            className='img-fluid'
          />
        </Row>
        <div className='box'>
          <h1>
            Environment Variables:
            <strong>
              <span style={{ color: 'blue' }}>Advanced dropdown</span>
              <span style={{ marginLeft: '5px', color: 'blue' }}>
                {'\u25BE'}
              </span>
            </strong>
          </h1>
          <h4>
            Add Secret File (.env) {'>'}
            <span style={{ color: 'blue' }}> Add variables</span>
          </h4>
          <hr />
          <ul>
            <h4>
              <span style={{ color: 'green' }}>ADD YOUR KEYS</span>
            </h4>
            <li>BASE_URL=http://localhost:3000</li>
            <li>JWT_SECRET=</li>
            <li>MONGODB_URI=</li>
            <li>PAYPAL_CLIENT_ID=</li>
            <li>STRIPE_PUBLISHABLE_KEY=</li>
            <li>STRIPE_SECRET_KEY=</li>
            <li>CLOUDINARY_CLOUD_NAME=</li>
            <li>CLOUDINARY_API_KEY=</li>
            <li>CLOUDINARY_URL=</li>
            <li>CLOUDINARY_API_SECRET=</li>
            <li>EMAIL_FROM=</li>
            <li>EMAIL_TO=</li>
            <li>NODE_USER=your_username_here</li>
            <li>NODE_PASSWORD=your_password_here</li>
          </ul>
          <span style={{ color: 'blue' }}>+ Create Web Service</span>
          <img src='/images/add env.png' alt='env' className='img-fluid' />
        </div>

        <Row md={12} className='box'>
          <h1>Modify existing Secret File (.env)</h1>
          <h4>
            Dashboard {'>'} (...) Settings {'>'} Environment {'>'} Secret Files{' '}
            {'>'} Make Changes {'>'} Done to Save Changes
          </h4>
          <p>
            To update an already existing .env /secrets file, go to the
            Environment tab on the left in the Dashboard, the secret file is
            listed there, and you click on the contents field to edit it.
          </p>
          <img src='/images/' alt='' className='img-fluid' />
        </Row>

        <hr />
        <Row md={12} className='box'>
          <h1>Add Custom URL </h1>
          <h4>
            Dashboard {'>'} (...) Settings {'>'} Custom Domains + add custom
            domain Domain provider: Your domain provider {'>'} Dashboard: Domain
            List (your.com) {'>'} manage{''} Advanced DNS
          </h4>
          <img src='/images/' alt='' className='img-fluid' />
        </Row>

        <br />
      </Container>
    </>
  );
};

export default MernRender;
