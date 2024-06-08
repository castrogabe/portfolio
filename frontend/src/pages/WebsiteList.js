import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Row, Col, Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import AdminPagination from '../components/AdminPagination';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        websites: action.payload.websites,
        totalWebsites: action.payload.totalWebsites,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false, successDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};

export default function WebsiteList() {
  const [
    {
      loading,
      error,
      websites,
      totalWebsites,
      pages,
      loadingCreate,
      loadingDelete,
      successDelete,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    error: '',
    websites: [],
  });

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/websites/admin?page=${page}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [page, userInfo, successDelete]);

  const createHandler = async () => {
    if (window.confirm('Are you sure to create?')) {
      try {
        dispatch({ type: 'CREATE_REQUEST' });
        const newWebsite = {
          name: 'New Website',
          slug: 'new-website',
          image: '/images/default.jpg',
          language: 'New Language',
          languageDescription: 'Description of the new language',
          description: 'New website description',
          link: 'http://newwebsite.com',
        };
        console.log('Creating website with data:', newWebsite); // Log the data being sent
        const { data } = await axios.post('/api/websites', newWebsite, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        toast.success('Website created successfully', {
          autoClose: 1000,
        });
        dispatch({ type: 'CREATE_SUCCESS' });
        navigate(`/admin/website/${data.website._id}`);
      } catch (err) {
        toast.error(getError(err));
        dispatch({
          type: 'CREATE_FAIL',
        });
      }
    }
  };

  const deleteHandler = async (website) => {
    if (window.confirm('Are you sure to delete?')) {
      try {
        await axios.delete(`/api/websites/${website._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        toast.success('Website deleted successfully', {
          autoClose: 1000,
        });
        dispatch({ type: 'DELETE_SUCCESS' });
      } catch (err) {
        toast.error(getError(err));
        dispatch({
          type: 'DELETE_FAIL',
        });
      }
    }
  };

  return (
    <div className='content'>
      <Helmet>
        <title>Website List</title>
      </Helmet>
      <br />
      <Row className='box'>
        <Col md={6}>
          <h4>
            Website List Page (
            {totalWebsites !== undefined ? totalWebsites : 'Loading...'}{' '}
            Websites Database)
          </h4>
        </Col>
        <Col md={6} className='col text-end'>
          <Button type='button' onClick={createHandler}>
            Create Website
          </Button>
        </Col>
      </Row>
      {loadingCreate && <LoadingBox delay={1000} />}
      {loadingDelete && <LoadingBox delay={1000} />}
      {loading ? (
        <LoadingBox delay={1000} />
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <>
          <div className='box'>
            <Table responsive striped bordered className='noWrap'>
              <thead className='thead'>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>LANGUAGE</th>
                  <th>LANGUAGE DESCRIPTION</th>
                  <th>DESCRIPTION</th>
                  <th>LINK</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {websites.map((website) => (
                  <tr key={website._id}>
                    <td>
                      {website._id}
                      <div key={website._id}>
                        <img
                          src={website.image}
                          alt={website.name}
                          className='img-fluid rounded img-thumbnail'
                          style={{ width: '225px', height: 'auto' }}
                        />
                        <br />
                        <Link to={`/website/${website.slug}`}>
                          {website.slug}
                        </Link>
                      </div>
                    </td>
                    <td>{website.name}</td>
                    <td>{website.language}</td>
                    <td>{website.languageDescription}</td>
                    <td style={{ width: '20%' }}>{website.description}</td>
                    <td>
                      <a
                        href={website.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {website.link}
                      </a>
                    </td>
                    <td>
                      <Button
                        type='button'
                        variant='primary'
                        onClick={() =>
                          navigate(`/admin/website/${website._id}`)
                        }
                      >
                        Edit
                      </Button>
                      &nbsp;
                      <Button
                        type='button'
                        variant='primary'
                        onClick={() => deleteHandler(website)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <AdminPagination
            currentPage={page}
            totalPages={pages}
            isAdmin={true}
          />
          <br />
        </>
      )}
    </div>
  );
}
