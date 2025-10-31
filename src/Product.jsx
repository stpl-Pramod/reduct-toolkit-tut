import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import {fetchProducts} from "./redux/productSlice"

const Product = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])
  return (
    <main className="product-container">
      <div className="product-card">
        <img src="https://via.placeholder.com/250" alt="Product 1" />
        <h3>Wireless Headphones</h3>
        <p className="price">₹2,499</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>

      <div className="product-card">
        <img src="https://via.placeholder.com/250" alt="Product 2" />
        <h3>Smart Watch</h3>
        <p className="price">₹3,999</p>
        <button className="add-to-cart" onClick={() => dispatch(addItem(1))}>Add to Cart</button>
      </div>

      <div className="product-card">
        <img src="https://via.placeholder.com/250" alt="Product 3" />
        <h3>Bluetooth Speaker</h3>
        <p className="price">₹1,899</p>
        <button className="add-to-cart" onClick={() => dispatch(addItem(1))}>
          Add to Cart
        </button> &nbsp;
        <button className="add-to-cart " onClick={() => dispatch(removeItem(1))}>
          Remove from Cart
        </button>
      </div>
    </main>
  );
};
export default Product;
