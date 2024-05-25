import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import WebsiteCard from '../components/WebsiteCard';
import { getError } from '../utils';

function Portfolio() {
  const [websites, setWebsites] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/websites');
        setWebsites(data);
      } catch (error) {
        setError(getError(error)); // Use getError to handle the error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className='content'>
        <br />
        {error ? (
          <div>Error fetching data: {error}</div> // Display the error message
        ) : (
          <Row>
            {websites.map((website, index) => (
              <Col md={12} className='box' key={index}>
                <WebsiteCard website={website} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default Portfolio;

// step 1 (AddWebSiteForm)
// step 2 (Portfolio)
