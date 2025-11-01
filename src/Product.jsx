import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";
import "./product.css"

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useSelector((state) => state.products.items);
  const cartSelector = useSelector((state) => state.cart.items);
  console.log("productSelector", productSelector);
  return (
    <>
      <div className="container">
        {productSelector.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt="" />
            <div className="content">
                <div className="title">{product.title}</div>
                <div className="brand">{product.brand}</div>
                <div className="price">{product.price}</div>
                <div className="rating">{product.rating}</div>
                
                {
                    cartSelector.find(cartItem=>cartItem.id===product.id)?
                    <button className="btn btn-danger" onClick={()=>dispatch(removeItem(product))}>Remove from cart</button>
                    :<button className="btn"  onClick={() => dispatch(addItem(product))}>Add to cart</button>
                
                }

                {/* <button className="btn"  onClick={() => dispatch(addItem(product))}>Add to cart</button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Product;
// <main className="product-container">
//   <div className="product-card">
//     <img src="https://via.placeholder.com/250" alt="Product 1" />
//     <h3>Wireless Headphones</h3>
//     <p className="price">₹2,499</p>
//     <button className="add-to-cart">Add to Cart</button>
//   </div>

//   <div className="product-card">
//     <img src="https://via.placeholder.com/250" alt="Product 2" />
//     <h3>Smart Watch</h3>
//     <p className="price">₹3,999</p>
//     <button className="add-to-cart" onClick={() => dispatch(addItem(1))}>Add to Cart</button>
//   </div>

//   <div className="product-card">
//     <img src="https://via.placeholder.com/250" alt="Product 3" />
//     <h3>Bluetooth Speaker</h3>
//     <p className="price">₹1,899</p>
//     <button className="add-to-cart" onClick={() => dispatch(addItem(1))}>
//       Add to Cart
//     </button> &nbsp;
//     <button className="add-to-cart " onClick={() => dispatch(removeItem(1))}>
//       Remove from Cart
//     </button>
//   </div>
// </main>
