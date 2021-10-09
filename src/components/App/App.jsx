// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import Filter from "../Filter";
import ContactList from "../ContactList";
import { Container, Title, SecondaryTitle } from "./index";
import { connect } from "react-redux";
// import * as actions from "../../redux/contacts/contacts-actions"

function App({ contacts }) {
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("contacts"));
  //   localStorage.length !== 0
  //     ? setContacts([...data])
  //     : localStorage.setItem("contacts", JSON.stringify([]));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify([...contacts]));
  // }, [contacts]);

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
      </Container>

      {contacts.length > 0 && (
        <Container>
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          <ContactList />
        </Container>
      )}
    </>
  );
}

App.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts,
  };
};

export default connect(mapStateToProps, null)(App);
