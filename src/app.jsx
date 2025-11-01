
import { useDispatch } from "react-redux"
import Header from "./Header"
import Product from "./Product"
import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartList from "./CartList"
// import { clearItem } from "./redux/slice"
export function App() {
  const dispatch = useDispatch()
  
  return (
    <>
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Product/>}></Route>
      <Route path="/cart" element={<CartList />}></Route>   
     </Routes>
    </BrowserRouter>
     {/* <h2>Toolkip app</h2> */}
    
    </>
  )
}
