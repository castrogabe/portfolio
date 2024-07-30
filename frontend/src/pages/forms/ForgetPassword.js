import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import LoadingBox from '../../components/LoadingBox';
import { toast } from 'react-toastify';
import { Store } from '../../Store';
import { getError } from '../../utils';

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/forget-password', {
        email,
      });
      toast.success(data.message, {
        autoClose: 1000,
      });

      dispatch({ type: 'UPDATE_PASSWORD', payload: data.updatedPassword });
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='content'>
      {isLoading ? (
        <LoadingBox />
      ) : (
        <>
          <Helmet>
            <title>Forget Password</title>
          </Helmet>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <h4 className='box'>Forget Password</h4>
              <div className='box'>
                <Form onSubmit={submitHandler}>
                  <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <div className='mb-3'>
                    <Button type='submit'>Submit</Button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col xs={12} md={6} className='mt-3'>
              <img
                src='/images/forget.jpg'
                alt='signin'
                className='img-fluid'
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}
