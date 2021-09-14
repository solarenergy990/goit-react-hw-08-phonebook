import userAPI from '../sevice/fetchUserAPI';
import axios from 'axios';
import userActions from './userActions';

const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  userError,
  isLoading,
} = userActions;

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerOperation = registerData => async dispatch => {
  dispatch(isLoading(true));
  try {
    const data = await userAPI.postRegisteredUser(registerData);
    token.set(data.token);
    dispatch(registerUser(data));
  } catch (error) {
    dispatch(userError(error));
  } finally {
    dispatch(isLoading(false));
  }
};

const loginOperation = loginData => async dispatch => {
  dispatch(isLoading(true));

  try {
    const result = await userAPI.postLoggedInUser(loginData);

    token.set(result.token);
    dispatch(loginUser(result));
  } catch (error) {
    dispatch(userError(error));
  } finally {
    dispatch(isLoading(false));
  }
};

const logoutOperation = () => async dispatch => {
  try {
    await userAPI.postLoggedOutUser();
    token.unset();
    dispatch(logoutUser());
  } catch (error) {}
};

const getCurrentUserOperation = currentToken => async dispatch => {
  if (currentToken === null) {
    return;
  }
  dispatch(isLoading(true));

  token.set(currentToken);
  try {
    const result = await userAPI.getCurrentUser();
    dispatch(currentUser(result));
  } catch (error) {
    dispatch(userError(error));
  } finally {
    dispatch(isLoading(false));
  }
};

const userOperations = {
  registerOperation,
  loginOperation,
  logoutOperation,
  getCurrentUserOperation,
};

export default userOperations;
