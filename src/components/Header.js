import { useState } from "react";
import Cart from "./Cart";
import "./style/Header.css";
import Logo from "../images/logo.svg";
import menuIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-close.svg";
import Avatar from "../images/image-avatar.png";

const Header = ({ products, cartItems, onAddItem, deleteItem }) => {
  const [isNavShow, setIsNavShow] = useState(true);

  const menuShow = () => {
    setIsNavShow(true);
  };

  const closeMenu = () => {
    setIsNavShow(false);
  };

  return (
    <header>
      <div className="mainmenu">
        <img
          className={`menu-icon ${isNavShow ? "hidden" : ""}`}
          src={menuIcon}
          alt="menu"
          onClick={menuShow}
        />
        <img src={Logo} alt="sneakers logo" />
        <nav className={`${!isNavShow ? "hidden" : ""}`}>
          <ul>
            <img
              className="hidden close"
              src={closeIcon}
              alt="close"
              onClick={closeMenu}
            />
            <li>
              <a href="#/collections">Collections</a>
            </li>
            <li>
              <a href="#/men">Men</a>
            </li>
            <li>
              <a href="#/women">Women</a>
            </li>
            <li>
              <a href="#/about">About</a>
            </li>
            <li>
              <a href="#/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="cart-profile">
        <Cart
          products={products}
          cartItems={cartItems}
          onAddItem={onAddItem}
          deleteItem={deleteItem}
        />
        <img src={Avatar} alt="avatar" className="avatar" />
      </div>
    </header>
  );
};

export default Header;