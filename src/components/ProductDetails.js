import Product from "./Product";

const ProductDetails = ({ products, onAddItem }) => {
  return <Product products={products} onAddItem={onAddItem} />;
};

export default ProductDetails;
