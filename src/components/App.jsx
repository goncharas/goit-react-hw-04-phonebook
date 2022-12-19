import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  GlobalStyle,
  MainTitle,
  ContactsTitle,
  WarningMessage,
} from './GlobalStyles';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const myContacts = JSON.parse(localStorage.getItem('contacts'));
    if (myContacts) {
      this.setState({ contacts: myContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleSubmit = (name, number) => {
    const { contacts } = this.state;
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    return checkContact
      ? toast.warn(`${name} is already in contacts`, { theme: 'dark' })
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  initialiseFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  doFiltering = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div
        style={{
          width: '500px',
          padding: '20px',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          border: '2px solid #082911',
          borderRadius: '4px',
          backgroundColor: '#f1c40f0d',
        }}
      >
        <div>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm handleSubmit={this.handleSubmit} />
        </div>
        <ContactsTitle> Contacts</ContactsTitle>
        {contacts.length !== 0 ? (
          <>
            <Filter filter={filter} initialiseFilter={this.initialiseFilter} />
            <ContactList
              contacts={this.doFiltering()}
              handleDelete={this.handleDelete}
            />
          </>
        ) : (
          <WarningMessage>
            Looks like you don`t have any contacts yet or just clear them all.
            Please add new contact.
          </WarningMessage>
        )}

        <GlobalStyle />
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}
