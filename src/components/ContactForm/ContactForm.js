import React, { useState } from 'react';

import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/app/operations';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.appState.contacts.items;
  });

  const handleChange = evt => {
    const { value } = evt.target;

    if (evt.currentTarget.name === 'name') {
      setName(value);
    }
    if (evt.currentTarget.name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const id = shortid();
    const newContact = { id, name, number };

    const checkedContactNames = contacts.map(contact => {
      return contact.name.toLowerCase();
    });

    if (checkedContactNames.includes(newContact.name.toLowerCase())) {
      reset();
      return alert(`${newContact.name} is already in contacts`);
    }

    dispatch(operations.postContactOperation(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-container">
          <label className={s.label}>
            <p className={s.labelText}>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={handleChange}
              value={name}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            <p className={s.labelText}>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleChange}
              value={number}
              className={s.input}
            />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
