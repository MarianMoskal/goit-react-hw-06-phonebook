import { connect } from "react-redux";
import { Item, Button } from "./index";
import * as actions from "../../redux/contacts/contacts-actions";
import makeFilteredContacts from "../../helpers/makeFilteredContacts";
import PropTypes from "prop-types";

function Contacts({ contacts, filter, onDelete }) {
  const emptyFilter = filter.trim() === "";

  return (
    <>
      {emptyFilter &&
        contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}: {number} ...................................
            <Button type="button" id={id} value="Delete" onClick={onDelete} />
          </Item>
        ))}

      {!emptyFilter &&
        makeFilteredContacts(contacts, filter.toLowerCase()).map(
          ({ id, name, number }) => (
            <Item key={id}>
              {name}: {number}...................................
              <Button type="button" id={id} value="Delete" onClick={onDelete} />
            </Item>
          )
        )}
    </>
  );
}

Contacts.propTypes = {
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array,
};

const mapStateToProps = ({ contacts, filter }) => {
  return { contacts, filter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (e) => dispatch(actions.deleteContact(e.target.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
