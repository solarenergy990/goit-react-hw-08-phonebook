import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import appActions from '../../redux/app/actions';
import appSelectors from '../../redux/app/contacts-selectors';
import { Form } from 'react-bootstrap';

const Filter = () => {
  const filter = useSelector(state => appSelectors.getContactFilter(state));

  const dispatch = useDispatch();
  const onChange = value => dispatch(appActions.setFilter(value));

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Find contacts by name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Start typing contact name"
          value={filter}
          onChange={evt => onChange(evt.currentTarget.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
};
