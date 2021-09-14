const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserMail = state => state.auth.user.email;
const getToken = state => state.auth.token;
const isLoading = state => state.auth.isLoading;

const userSelectors = {
  getIsLoggedIn,
  getUserMail,
  getToken,
  isLoading,
};

export default userSelectors;
