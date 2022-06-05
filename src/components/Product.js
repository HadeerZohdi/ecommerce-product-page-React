import { useState, useReducer } from "react";
import cartIcon from "../images/icon-cart.svg";
import "./style/Product.css";

const Product = ({ products, onAddItem }) => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        if (state === 0) {
          return state;
        } else {
          return state - 1;
        } //dont decrement less than 0

      default:
        return state;
    }
  }

  return products.map((product) => {
    return (
      <div key={product.id} className="product-details-description">
        <span className="product-name">{product.name}</span>
        <h1>{product.title}</h1>
        <p className="product-description"> {product.description} </p>

        {/* Price section */}
        <div className="price">
          <div className="price-current-discount">
            <span className="current-price">{`$${product.price.toFixed(
              2
            )}`}</span>
            <span className="discount">{product.discount}</span>
          </div>
          <p className="old-price">{`$${product.oldPrice}`}</p>
        </div>

        {/* Buttons section increment-decrement */}
        {/* error */}
        <div className="buttouns">
          <div className="increment-controls">
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <p> {count} </p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
          </div>

          {/* Add to Cart */}
          <button
            className="add-to-card"
            onClick={() => {
              onAddItem(product, count);
              // adding error message
              if (count === 0) {
                setErrorMsg(true);
              } else {
                setErrorMsg(false);
              }
            }}
          >
            <img src={cartIcon} alt="cart" />
            Add to Cart
          </button>
        </div>
        {errorMsg && <p className="error-msg">Please add at least 1 item</p>}
      </div>
    );
  });
};

export default Product;
