const getContactList = state => state.appState.contacts.items;
const getContactFilter = state => state.appState.filter;
const getContactLoading = state => state.appState.contacts.isLoading;
const getContactError = state => state.appState.contacts.error;

const appSelectors = {
  getContactList,
  getContactFilter,
  getContactLoading,
  getContactError,
};

export default appSelectors;
