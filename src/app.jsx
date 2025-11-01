
import { useDispatch } from "react-redux"
import Header from "./Header"
import Product from "./Product"
import './app.css'
// import { clearItem } from "./redux/slice"
export function App() {
  const dispatch = useDispatch()
  
  return (
    <>
     {/* <h2>Toolkip app</h2> */}
     <Header />
     {/* <button onClick={()=>dispatch(clearItem())}>Clear Cart</button> */}
     <Product />
    </>
  )
}
