const CONTACTS_STORAGE_KEY = 'phonebook-contacts';

export const saveContacts = contacts => {
  localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts));
};

export const loadContacts = () => {
  const storedContacts = localStorage.getItem(CONTACTS_STORAGE_KEY);
  return storedContacts ? JSON.parse(storedContacts) : [];
};
