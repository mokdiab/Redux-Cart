import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const CartSelector = useSelector((state) => state.cart);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{CartSelector.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
