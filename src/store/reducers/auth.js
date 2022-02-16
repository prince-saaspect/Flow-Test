import { LOGIN_WITH_EMAIL, LOGOUT, SIGNUP_WITH_EMAIL } from "../types";

const authInitialState = {
  userData: {},
  authToken: "",
  loading: false,
  isLoggedIn: false,
  error: {},
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case LOGIN_WITH_EMAIL.REQUEST:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
      };
    case LOGIN_WITH_EMAIL.SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        userData: action.payload.userData,
        authToken: action.payload.token,
        error: {},
      };
    case LOGIN_WITH_EMAIL.FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload.message,
        userData: {},
      };
    case SIGNUP_WITH_EMAIL.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_WITH_EMAIL.SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        authToken: action.payload.token,
        userData: action.payload.user,
        isLoggedIn: true,
      };
    case SIGNUP_WITH_EMAIL.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        isLoggedIn: false,
        userData: {},
        authToken: "",
      };
    case LOGOUT.REQUEST:
      return authInitialState;
    default:
      return state;
  }
};

export default authReducer;
