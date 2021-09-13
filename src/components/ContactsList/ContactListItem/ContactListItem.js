import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ contactName, contactNumber, onClickRemove }) => {
  return (
    <li className={s.listItem}>
      <p className={s.listText}>
        {contactName} : {contactNumber}
      </p>
      <button type="button" className={s.button} onClick={onClickRemove}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};
