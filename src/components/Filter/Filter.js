import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import appActions from '../../redux/app/actions';
import appSelectors from '../../redux/app/contacts-selectors';

const Filter = () => {
  const filter = useSelector(state => appSelectors.contactFilter(state));

  const dispatch = useDispatch();
  const onChange = value => dispatch(appActions.setFilter(value));

  return (
    <label>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={evt => onChange(evt.currentTarget.value)}
      ></input>
    </label>
  );
};

export default Filter;

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
};
