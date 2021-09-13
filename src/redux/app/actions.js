import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('app/addContact');

const setContacts = createAction('app/setContacts');

const deleteContact = createAction('app/deleteContact');

const contactFetchStarted = createAction('app/contactFetchStart');

const contactFetchFinished = createAction('app/contactFetchStart');

const contactFetchError = createAction('app/contactFetchError');

const setFilter = createAction('app/setFilter');

const appActions = {
  addContact,
  setContacts,
  deleteContact,
  setFilter,
  contactFetchStarted,
  contactFetchFinished,
  contactFetchError,
};

export default appActions;
