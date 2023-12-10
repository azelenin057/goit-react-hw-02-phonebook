import { Component } from 'react';
import ContactInput from './ContactInput/ContactInput.js';
import ContactList from './ContactList/ContactList.js';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = (name, number) => {
    console.log(name);
    console.log(number);

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(pervState => ({
      contacts: [contact, ...pervState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactInput onSubmit={this.addContact} />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
