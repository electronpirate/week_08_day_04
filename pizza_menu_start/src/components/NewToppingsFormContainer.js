import { connect } from 'react-redux';
import NewToppingsForm from './NewToppingsForm.js';

const mapDispatchToProps = (dispatch) => ({
  submitTopping(newTopping) {
    dispatch({
      type: 'ADD_TOPPING',
      newTopping
    });
  }
});

export default connect(null, mapDispatchToProps)(NewToppingsForm);
