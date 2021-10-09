import { connect } from "react-redux";
import { Label, Input } from "./index";
import * as actions from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";

function Filter({ onChange }) {
  return (
    <>
      <Label htmlFor="filter">Find contact by name</Label>
      <Input
        onChange={onChange}
        type="text"
        name="filter"
        id="filter"
        placeholder="Let's find the contact"
      />
    </>
  );
}

Filter.propTypes = {
  onChamge: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(actions.changeFilter(e.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
