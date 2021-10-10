import Form from "../Form";
import Filter from "../Filter";
import ContactList from "../ContactList";
import { Container, Title, SecondaryTitle } from "./index";
import { useSelector } from "react-redux";

export default function App() {
  const { contacts } = useSelector((state) => state);

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
      </Container>

      {contacts.length > 0 ? (
        <Container>
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          <ContactList />
        </Container>
      ) : null}
    </>
  );
}

// const mapStateToProps = ({ contacts }) => {
//   return {
//     contacts,
//   };
// };

// export default connect(mapStateToProps, null)(App);
