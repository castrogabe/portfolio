import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BottomFooter = () => {
  return (
    <div className='bottom-footer'>
      <Row>
        <Col className='text-center'>&copy; your.com</Col>
      </Row>
    </div>
  );
};

export default BottomFooter;
