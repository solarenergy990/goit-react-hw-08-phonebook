import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userSelectors from '../redux/user/userSelectors';
import userOperations from '../redux/user/userOperations';

import { Form, Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

const LoginView = () => {
  const loadingForm = useSelector(state => userSelectors.isLoading(state));

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;

    if (evt.currentTarget.name === 'email') {
      setEmail(value);
    }
    if (evt.currentTarget.name === 'password') {
      setPassword(value);
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(userOperations.loginOperation({ email, password }));
    reset();
  };

  return (
    <>
      {loadingForm ? (
        <Loader type="Rings" color="#00BFFF" height={42} width={42} />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              minLength="7"
              name="password"
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Confirm your data" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      )}{' '}
    </>
  );
};

export default LoginView;

// {
//   loading ? <Loading /> : <LoginForm />;
// }
