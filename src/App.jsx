import React, { Component } from 'react';
import './App.css';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import contactsList from './Contacts.json';

export default class App extends Component {
  state = {
    contacts: contactsList,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFormSubmit = data => {
    const { contacts } = this.state;
    const exists = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());

    exists === undefined
      ? this.setState({ contacts: contacts.concat(data) })
      : alert(`${data.name} is alredy in the contacts list`);
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const equalFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(equalFilter));
  };

  render() {
    let { filter } = this.state;
    return (
      <div className="wrapper">
        <section className="section">
          <h1>Phonebook</h1>
          <Form onSubmit={this.handleFormSubmit} />
        </section>

        <section className="section">
          <h2>Contacts</h2>
          <Filter value={filter} onInput={this.changeFilter} />
          <Contacts contacts={this.getVisibleContacts()} handleDeleteContact={this.deleteContact} />
        </section>
      </div>
    );
  }
}
