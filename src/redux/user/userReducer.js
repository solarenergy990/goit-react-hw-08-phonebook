import { createReducer } from '@reduxjs/toolkit';
import userActions from '../user/userActions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const userReducer = createReducer(initialState, {
  [userActions.registerUser]: (state, { payload }) => {
    console.log('register payload', payload);
    return {
      ...state,
      user: payload.user,
      token: payload.token,
      isLoggedIn: true,
    };
  },
  [userActions.loginUser]: (state, { payload }) => {
    return {
      ...state,
      user: payload.user,
      token: payload.token,
      isLoggedIn: true,
    };
  },
  [userActions.logoutUser]: state => initialState,
  [userActions.currentUser]: (state, { payload }) => {
    return {
      ...state,
      user: payload,
      isLoggedIn: true,
    };
  },
  [userActions.isLoading]: (state, { payload }) => ({
    ...state,
    isLoading: payload,
  }),
});

export default userReducer;
