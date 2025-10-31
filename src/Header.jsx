import AddToCart from "./AddToCart";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Shop<span>Zone</span>
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>
      <AddToCart />
    </header>
  );
};
export default Header;
