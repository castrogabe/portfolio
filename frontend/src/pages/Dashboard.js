import React, { useContext, useEffect, useReducer } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Store } from '../Store';
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Row, Col, Card } from 'react-bootstrap';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function Dashboard() {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: summaryData } = await axios.get('/api/summary/summary', {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });

        dispatch({
          type: 'FETCH_SUCCESS',
          payload: summaryData,
        });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div className='content'>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <br />
      <h2 className='box'>Admin Dashboard</h2>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <>
          <Row className='mt-3'>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {summary.users && summary.users[0]
                      ? summary.users[0].numUsers
                      : 0}
                  </Card.Title>
                  <Card.Text>Users</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {summary.websites && summary.websites.length
                      ? summary.websites.reduce(
                          (acc, cur) => acc + cur.totalWebsites,
                          0
                        )
                      : 0}
                  </Card.Title>
                  <Card.Text>Total Websites</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {summary.websites && summary.websites.length
                      ? summary.websites.length
                      : 0}
                  </Card.Title>
                  <Card.Text>Website Stack</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className='my-3'>
            <h2>Websites by Language Description</h2>
            {summary.websites.length === 0 ? (
              <MessageBox>No Websites</MessageBox>
            ) : (
              <Chart
                width='100%'
                height='400px'
                chartType='PieChart'
                loader={<div>Loading Chart...</div>}
                data={[
                  ['Language Description', 'Websites'],
                  ...summary.websites.map((x) => [x._id, x.totalWebsites]),
                ]}
              ></Chart>
            )}
          </div>
          <br />
        </>
      )}
    </div>
  );
}
