import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAIL,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAIL,
  DELETE_RESET,
} from '../constants/actionTypes';

const initialState = {
  loading: true,
  error: '',
  websites: [],
  loadingCreate: false,
  loadingDelete: false,
  successDelete: false,
  page: 1,
  pages: 1,
};

const websiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        websites: action.payload.websites,
        page: action.payload.page,
        pages: action.payload.pages,
      };
    case FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };

    case CREATE_REQUEST:
      return { ...state, loadingCreate: true };
    case CREATE_SUCCESS:
      return { ...state, loadingCreate: false };
    case CREATE_FAIL:
      return { ...state, loadingCreate: false };

    case DELETE_REQUEST:
      return { ...state, loadingDelete: true, successDelete: false };
    case DELETE_SUCCESS:
      return { ...state, loadingDelete: false, successDelete: true };
    case DELETE_FAIL:
      return { ...state, loadingDelete: false, successDelete: false };
    case DELETE_RESET:
      return { ...state, loadingDelete: false, successDelete: false };

    default:
      return state;
  }
};

export default websiteReducer;
