import { createContext, useReducer } from 'react';
import { userReducer } from './reducers/userReducer';

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
