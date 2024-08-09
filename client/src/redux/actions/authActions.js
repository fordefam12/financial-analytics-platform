import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', userData);
    dispatch({ type: LOGIN_USER, payload: response.data });
  } catch (error) {
    console.error('Login failed', error);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/register', userData);
    dispatch({ type: REGISTER_USER, payload: response.data });
  } catch (error) {
    console.error('Registration failed', error);
  }
};
