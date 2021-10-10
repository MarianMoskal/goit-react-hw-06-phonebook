import { useSelector, useDispatch } from "react-redux";
import { Label, Input, Submit, FormS } from "./index";
import * as actions from "../../redux/contacts/contacts-actions";

function onSubmit(e, contacts, dispatch) {
  e.preventDefault();

  const { name, number } = e.target;
  const foundEl = contacts.find(
    (el) => el.name.toLowerCase() === name.value.toLowerCase()
  );

  foundEl
    ? alert(`${name.value} is already in your contacts!`)
    : dispatch(actions.addContact(name.value, number.value));

  name.value = "";
  number.value = "";
}

export default function Form() {
  const { contacts } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <FormS onSubmit={(e) => onSubmit(e, contacts, dispatch)}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        id="number"
        placeholder="Enter your number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <Submit type="submit" value="Add contact" />
    </FormS>
  );
}

// const mapStateToProps = ({ contacts }) => {
//   return {
//     contacts,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleSubmit: (name, number) => dispatch(actions.addContact(name, number)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
