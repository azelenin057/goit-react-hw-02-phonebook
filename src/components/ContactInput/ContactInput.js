import React, { Component } from 'react';

class ContactInput extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleChangeTel = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <p>Telefon</p>
        <input
          type="tel"
          name="tel"
          required
          value={this.state.number}
          onChange={this.handleChangeTel}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactInput;
