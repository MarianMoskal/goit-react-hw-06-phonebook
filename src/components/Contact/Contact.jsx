import * as actions from "../../redux/contacts/contacts-actions";
import { Item, Name, Button } from "./Contact.styled";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

export default function Contact({ props: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <>
      <Item>
        <Name>{name} :</Name>
        {number}
      </Item>

      <Button
        type="button"
        id={id}
        value="Delete"
        onClick={(e) => dispatch(actions.deleteContact(e.target.id))}
      />
    </>
  );
}

Contact.propTypes = {
  props: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
