import "photoswipe/dist/photoswipe.css";
import product1 from "../images/image-product-1.jpg";
import product1Thumb from "../images/image-product-1-thumbnail.jpg";
import product2 from "../images/image-product-2.jpg";
import product2Thumb from "../images/image-product-2-thumbnail.jpg";
import product3 from "../images/image-product-3.jpg";
import product3Thumb from "../images/image-product-3-thumbnail.jpg";
import product4 from "../images/image-product-4.jpg";
import product4Thumb from "../images/image-product-4-thumbnail.jpg";

import "./style/ProductGallery.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const ProductGallery = () => {
  return (
    <Gallery>

<div className="gallery">
      <img className="hero-img" src={product1} alt="product" />
<div>
      <Item
        original={product1}
        thumbnail={product1Thumb}
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            className="thumb"
            ref={ref}
            onClick={open}
            alt="product"
            src={product1Thumb}
          />
        )}
      </Item>

      <Item
        original={product2}
        thumbnail={product2Thumb}
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            className="thumb"
            ref={ref}
            onClick={open}
            src={product2Thumb}
            alt="product"
          />
        )}
      </Item>

      <Item
        original={product3}
        thumbnail={product3Thumb}
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            className="thumb"
            ref={ref}
            onClick={open}
            src={product3Thumb}
            alt="product"
          />
        )}
      </Item>

      <Item
        original={product4}
        thumbnail={product4Thumb}
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            className="thumb"
            ref={ref}
            onClick={open}
            src={product4Thumb}
            alt="product"
          />
        )}
      </Item>
      </div>
   </div>

    </Gallery>
  );
};

export default ProductGallery;
