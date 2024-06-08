import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import { Container, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return { ...state, loadingUpload: false, errorUpload: '' };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
};

export default function WebsiteEdit() {
  const navigate = useNavigate();
  const params = useParams(); // website:id
  const { id: websiteId } = params;

  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(''); // State for image preview
  const [language, setLanguage] = useState('');
  const [languageDescription, setLanguageDescription] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/websites/${websiteId}`);
        setName(data.name);
        setSlug(data.slug);
        setImage(data.image);
        setImagePreview(data.image); // Set the initial image preview
        setLanguage(data.language);
        setLanguageDescription(data.languageDescription);
        setDescription(data.description);
        setLink(data.link);
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [websiteId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `/api/websites/${websiteId}`,
        {
          _id: websiteId,
          name,
          slug,
          image,
          language,
          languageDescription,
          description,
          link,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      toast.success('Website updated successfully');
      navigate('/admin/websites');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_FAIL' });
    }
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/api/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });
      toast.success('Image uploaded successfully');
      setImage(data); // Set the uploaded image URL
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
    }
  };

  return (
    <Container className='small-container'>
      <Helmet>
        <title>Edit Website {websiteId}</title>
      </Helmet>
      <br />
      <h4 className='box'>Edit Website {websiteId}</h4>

      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='slug'>
            <Form.Label>Slug</Form.Label>
            <Form.Control
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='image'>
            <Form.Label>Upload Image File</Form.Label>
            <Form.Control type='file' onChange={uploadFileHandler} />
            {loadingUpload && <LoadingBox />}
            {imagePreview && ( // Show image preview if available
              <img
                src={imagePreview}
                alt='Image Preview'
                style={{ width: '100px', height: '100px', marginTop: '10px' }}
              />
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='language'>
            <Form.Label>Language</Form.Label>
            <Form.Control
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='languageDescription'>
            <Form.Label>Language Description</Form.Label>
            <Form.Control
              value={languageDescription}
              onChange={(e) => setLanguageDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='link'>
            <Form.Label>Link</Form.Label>
            <Form.Control
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </Form.Group>

          <div className='mb-3'>
            <Button disabled={loadingUpdate} type='submit'>
              Update
            </Button>
            {loadingUpdate && <LoadingBox />}
          </div>
        </Form>
      )}
    </Container>
  );
}
