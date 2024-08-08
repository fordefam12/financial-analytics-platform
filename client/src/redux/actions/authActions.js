import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
  return {
    type: 'LOGIN_USER',
    payload: userData
  };
};

export const registerUser = (userData) => {
  return {
    type: REGISTER_USER,
    payload: userData,
  };
};
