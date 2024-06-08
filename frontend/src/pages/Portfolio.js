import React, { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { getError } from '../utils';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import WebsiteCard from '../components/WebsiteCard';
import Pagination from '../components/Pagination';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        websites: action.payload.websites,
        page: action.payload.page,
        pages: action.payload.pages,
        countWebsites: action.payload.countWebsites,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default function Home() {
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;

  const [{ loading, error, websites, pages }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/websites/search?page=${page}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [page]);

  // Pagination
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || page;
    return {
      pathname: '/',
      search: `?page=${filterPage}`,
    };
  };

  return (
    <>
      <div className='content'>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <br />
        <div className='box'>
          <p>
            ~ Discover the creativity and innovation in our meticulously crafted
            website portfolio. Dive into our collection and get inspired! ~
          </p>
        </div>

        <br />
        <Row>
          <Col>
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant='danger'>{error}</MessageBox>
            ) : (
              <>
                {websites.length === 0 && (
                  <MessageBox>No Website Found</MessageBox>
                )}
                <Row>
                  {websites.map((website, index) => (
                    <Col md={12} className='box' key={index}>
                      <WebsiteCard website={website} />
                    </Col>
                  ))}
                </Row>

                {/* Pagination Component */}
                <Pagination
                  currentPage={page}
                  totalPages={pages}
                  getFilterUrl={getFilterUrl}
                />
                <br />
              </>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}
