import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
import { useState } from "react";

const products = [
  {
    id: 'p1',
    img: './images/image-product-1-thumbnail.jpg',
    name: 'SNEAKER COMPANY',
    title: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 125,
    discount: '50%',
    oldPrice: '250.00',
  }
]

function App() {

  const [cartItems, setCartItems] = useState([])


// Add to Cart
const onAddItem = (product, count) => {
  const id = Math.random();
  const total = product.price * count;
  const newItem = {...product, id, total, quantity: count};
  if (count > 0) {
  setCartItems([...cartItems, newItem])
  }
}

// Delete from cart
const deleteItem = (id) => {
  setCartItems(cartItems.filter( (item) => item.id !== id))
}


  return (
  <div className="container">
    <Header products={products} cartItems={cartItems} onAddItem={onAddItem} deleteItem={deleteItem} />
      <main>
        <ProductGallery />
        <ProductDetails cartItems={cartItems} products={products} onAddItem={onAddItem}/>
      </main>
  </div>
  )
}

export default App;
