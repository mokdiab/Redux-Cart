import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_DATA = [
  {
    id: "P1",
    title: "Test 1",
    price: 6,
    description: "this is test 1",
  },
  {
    id: "P2",
    title: "Test 2",
    price: 5,
    description: "this is test 2",
  },
  {
    id: "P3",
    title: "Test 3",
    price: 4,
    description: "this is test 3",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
