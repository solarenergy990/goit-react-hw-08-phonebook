import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

import { Button } from 'react-bootstrap';

const ContactListItem = ({ contactName, contactNumber, onClickRemove }) => {
  return (
    <li className={s.listItem}>
      <p className={s.listText}>
        {contactName} : {contactNumber}
      </p>
      <div className="mb-2">
        <Button variant="danger" size="sm" onClick={onClickRemove}>
          Delete
        </Button>{' '}
      </div>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};
