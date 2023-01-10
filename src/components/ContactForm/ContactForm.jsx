import React, { Component } from 'react';
export class ContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    this.props.onSubmitApp(name.value, number.value);
    name.value = '';
    number.value = '';
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            border: 'solid',
          }}
        >
          <label>Name</label>
          <input
            className=""
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>

          <label className="">Number</label>
          <input
            className=""
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
