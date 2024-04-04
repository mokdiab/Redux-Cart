import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
const ProductItem = (props) => {
  const { title, price, description, product } = props;
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
