import { connect } from 'react-redux';
import Home from '../components/home';
import { addTocart,removeTocart } from '../Services/Actions/actions';
const mapStateToProps = (state) => ({
  cardData: state.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addTocart(data)),
  removeToCartHandler: () => dispatch(removeTocart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
