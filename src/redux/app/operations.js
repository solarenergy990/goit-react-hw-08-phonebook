import appActions from '../app/actions';
import contactAPI from '../sevice/fetchContactAPI';

const {
  addContact,
  setContacts,
  deleteContact,

  contactFetchStarted,
  contactFetchFinished,
  contactFetchError,
} = appActions;

const postContactOperation = contact => async dispatch => {
  //   console.log(contact);
  dispatch(contactFetchStarted());
  try {
    const result = await contactAPI.postContact(contact);
    // console.log('result in post', result);
    dispatch(addContact(result));
  } catch (error) {
    dispatch(contactFetchError(error));
  } finally {
    dispatch(contactFetchFinished());
  }
};

const getContactOperation = () => async dispatch => {
  dispatch(contactFetchStarted(true));
  try {
    const result = await contactAPI.getContacts();
    dispatch(setContacts(result));
  } catch (error) {
    dispatch(contactFetchError(error));
  } finally {
    dispatch(contactFetchFinished(false));
  }
};

const deleteContactOperation = contactId => async dispatch => {
  dispatch(contactFetchStarted(true));
  try {
    await contactAPI.deleteContact(contactId);

    dispatch(deleteContact(contactId));
  } catch (error) {
    dispatch(contactFetchError(error));
  } finally {
    dispatch(contactFetchFinished(false));
  }
};

const operations = {
  postContactOperation,
  getContactOperation,
  deleteContactOperation,
};

export default operations;
