import React, { useState } from 'react';

import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/app/operations';

import { Form, Button, Row, Col } from 'react-bootstrap';
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
    <div className={s.formContainer}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className={s.rows}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              />
            </Form.Group>
          </Col>
          <Col className={s.rows}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your number"
                onChange={handleChange}
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              />
            </Form.Group>
          </Col>

          <Col className={s.rows}>
            <Button variant="primary" type="submit">
              Add contact
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ContactForm;
