import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartItems = cartItems.length >= 1;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {!isCartItems && <h3>You have no products on your cart</h3>}
      {isCartItems && (
        <ul>
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
