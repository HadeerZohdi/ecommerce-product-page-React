import { useState } from "react";
import cartIcon from "../images/icon-cart.svg";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";
import "./style/Cart.css";

const Cart = ({ cartItems, deleteItem }) => {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(!cartShow);
  };

  return (
    <div className="cart-container">

        <div className="cart-icon-counter">
         { cartItems.length > 0 && <div className="cart-counter"> {cartItems.length} </div>}
        <img
          src={cartIcon}
          alt="cart"
          className="cart-icon"
          onClick={showCartHandler}
        />
       </div>


      {cartShow && (
        <div className="cart-window">
          <div className="cart-title">
            <h4>Cart</h4>
          </div>

          <div className="cart-list">
            {cartItems.length === 0 ? (
              <p className="empty-card">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-list-item">
                  <img
                    src={thumbnail}
                    alt="product_image"
                    className="cart-product-image"
                  />

                  <div className="cart-text">
                    <p>{item.title}</p>
                    <p>
                      {" "}
                      {`$${item.price.toFixed(2)}`} x {item.quantity}{" "}
                    </p>
                    <span className="total">
                      {" "}
                      {`$${item.total.toFixed(2)}`}{" "}
                    </span>
                  </div>
                  <img
                    src={deleteIcon}
                    alt="delete"
                    className="delete-icon"
                    onClick={() => deleteItem(item.id)}
                  />
                </div>
              ))
            )}
          </div>

          <div className="checkout">
            {cartItems.length > 0 && (
              <button className="checkout-btn">Checkout</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
