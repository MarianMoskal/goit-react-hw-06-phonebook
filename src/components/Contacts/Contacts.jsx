import { useSelector } from "react-redux";
import { Item } from "./Contacts.styled";
import Contact from "../Contact";
import makeFilteredContacts from "../../helpers/makeFilteredContacts";

export default function Contacts() {
  const { contacts, filter } = useSelector((state) => state);
  const emptyFilter = filter.trim() === "";

  return (
    <>
      {emptyFilter
        ? contacts.map((contact) => (
            <Item key={contact.id}>
              <Contact props={contact} />
            </Item>
          ))
        : makeFilteredContacts(contacts, filter.toLowerCase()).map(
            (contact) => (
              <Item key={contact.id}>
                <Contact props={contact} />
              </Item>
            )
          )}
    </>
  );
}

// const mapStateToProps = ({ contacts, filter }) => {
//   return { contacts, filter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDelete: (e) => dispatch(actions.deleteContact(e.target.id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
