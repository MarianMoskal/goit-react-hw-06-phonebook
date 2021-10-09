import { connect } from "react-redux";
import { Label, Input, Submit, FormS } from "./index";
import * as actions from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";

function Form({ contacts, handleSubmit }) {
  function onSubmit(e) {
    e.preventDefault();

    const { inputName, inputNumber } = e.target;
    const foundEl = contacts.find(
      (el) => el.name.toLowerCase() === inputName.value.toLowerCase()
    );

    foundEl
      ? alert(`${inputName.value} is already in your contacts!`)
      : handleSubmit(inputName.value, inputNumber.value);

    inputName.value = "";
    inputNumber.value = "";
  }

  return (
    <FormS onSubmit={onSubmit}>
      <Label htmlFor="inputName">Name</Label>
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        id="inputName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <Label htmlFor="inputName">Number</Label>
      <Input
        type="tel"
        name="number"
        id="inputNumber"
        placeholder="Enter your number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <Submit type="submit" value="Add contact" />
    </FormS>
  );
}

Form.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (name, number) => dispatch(actions.addContact(name, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
