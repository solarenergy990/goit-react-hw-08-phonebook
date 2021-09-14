import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userSelectors from '../../redux/user/userSelectors';
import userOperations from '../../redux/user/userOperations';
import { Button } from 'react-bootstrap';

const UserMenu = () => {
  const userMail = useSelector(state => userSelectors.getUserMail(state));
  const dispatch = useDispatch();
  return (
    <>
      <p>Welcome {userMail}</p>

      <div className="mb-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => dispatch(userOperations.logoutOperation())}
        >
          LogOut
        </Button>{' '}
      </div>
    </>
  );
};

export default UserMenu;
