const contactList = state => state.appState.contacts.items;
const contactFilter = state => state.appState.filter;
const contactLoading = state => state.appState.contacts.isLoading;
const contactError = state => state.appState.contacts.error;

const appSelectors = {
  contactList,
  contactFilter,
  contactLoading,
  contactError,
};

export default appSelectors;
