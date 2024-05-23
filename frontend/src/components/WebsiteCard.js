import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function WebsiteCard({ website }) {
  return (
    <Card>
      <Row noGutters>
        <Col md={6}>
          <Card.Img
            src={website.image}
            alt={website.name}
            loading='lazy'
            className='card-img-left'
          />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>{website.name}</Card.Title>
            <Card.Text>{website.languageDescription}</Card.Text>
            <Card.Text>{website.description}</Card.Text>
            <Button
              href={website.link}
              target='_blank'
              rel='noopener noreferrer'
              variant='primary'
            >
              Visit Website
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default WebsiteCard;
