import { createAction } from '@reduxjs/toolkit';

const registerUser = createAction('user/registerUser');

const loginUser = createAction('user/loginUser');

const logoutUser = createAction('user/logoutUser');

const currentUser = createAction('user/currentUser');

const isLoading = createAction('user/isLoading');

const userError = createAction('user/error');

const userActions = {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  userError,
  isLoading,
};

export default userActions;
