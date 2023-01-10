import React, { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    contacts.some(contact => contact.name === name || contact.number === number)
      ? Notify.warning(`${name} is already in contacts`)
      : setContacts([
          ...contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ]);
  };

  const handleFilterChanged = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(prev => prev.filter(({ id }) => id !== contactId));
  };

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmitApp={handleAddContact} />
      <h2 className="">Contacts</h2>
      <Filter filter={filter} onFilterChanged={handleFilterChanged} />
      <ContactList contacts={filtered} deleteContact={handleDeleteContact} />
    </div>
  );
};
