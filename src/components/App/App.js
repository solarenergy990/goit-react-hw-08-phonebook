import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import RegisterView from '../../views/RegisterView';
import LoginView from '../../views/LoginView';
// import ContactsView from '../../views/ContactsView';
import Header from '../Header/Header';
import Container from '../Container/Container';
import userSelectors from '../../redux/user/userSelectors';
import userOperations from '../../redux/user/userOperations';

import Loader from 'react-loader-spinner';

const ContactsView = lazy(() => import('../../views/ContactsView'));
const RegisterView = lazy(() => import('../../views/RegisterView'));
const { getIsLoggedIn, getToken, isLoading } = userSelectors;

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));
  const token = useSelector(state => getToken(state));
  // const loadingRoute = useSelector(state => isLoading(state));

  useEffect(() => {
    dispatch(userOperations.getCurrentUserOperation(token));
  }, [dispatch, token]);

  return (
    <Container>
      <Header />

      <Suspense
        fallback={
          <Loader type="Rings" color="#00BFFF" height={42} width={42} />
        }
      >
        <Switch>
          <Route path="/contacts">
            {isLoggedIn ? <ContactsView /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!isLoggedIn ? <LoginView /> : <Redirect to="/contacts" />}
          </Route>
          <Route path="/register">
            {!isLoggedIn ? <RegisterView /> : <Redirect to="/contacts" />}
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
