import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Shop<span>Zone</span>
      </div>

      <nav className="nav">
        <ul>
            <li>
               <a href="javascript:void()"><Link to="/">Home</Link></a> 
            </li>
        </ul>
       
      </nav>
      <AddToCart />
    </header>
  );
};
export default Header;
