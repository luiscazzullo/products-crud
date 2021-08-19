import { 
  ERROR_REGISTER, 
  SUCCESS_REGISTER, 
  LOADING_REGISTER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  LOADING_LOGIN
} from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case SUCCESS_LOGIN:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        auth: true,
        token: action.payload.token,
        user: action.payload.user,
        loading: false
      }
    case SUCCESS_REGISTER:
      return {
        ...state,
        message: action.payload.message,
        user: action.payload.user,
        loading: false
      }
    case ERROR_REGISTER:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      }
    case LOADING_REGISTER:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}