import { connect } from 'react-redux';
import PizzaToppingsList from './PizzaToppingsList.js';

const mapStateToProps = (state) => {
  return {
    toppings: state.toppings
  }
};

export default connect(mapStateToProps)(PizzaToppingsList);
