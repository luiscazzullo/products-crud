import { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clientAxios from '../../config/clientAxios';
import {
  SUCCESS_REGISTER,
  LOADING_REGISTER,
  ERROR_REGISTER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  LOADING_LOGIN
} from '../../types';

const AuthState = ({ children }) => {
  const INITIAL_STATE = {
    token: localStorage.getItem('token') || null,
    auth: false,
    user: null,
    message: '',
    loading: false
  }
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const register = async (data) => {
    try {
      dispatch({ type: LOADING_REGISTER });
      const response = await clientAxios.post('/auth/register', data);
      dispatch({
        type: SUCCESS_REGISTER,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: ERROR_REGISTER,
        payload: {
          message: 'Algo sucedió mal al registrar el usuario'
        }
      })
    }
  }

  const login = async (data) => {
    try {
      dispatch({ type: LOADING_LOGIN });
      const response = await clientAxios.post('/auth/login', data);
      console.log(response);
      dispatch({
        type: SUCCESS_LOGIN,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN,
        payload: {
          message: 'Algo sucedió mal al registrar el usuario'
        }
      })
    }
  }

  return (
    <AuthContext.Provider value={{
      token: state.token,
      auth: state.auth,
      user: state.user,
      message: state.message,
      loading: state.loading,
      register,
      login
    }}>
      {children}
    </AuthContext.Provider>
  );
}
 
export default AuthState;