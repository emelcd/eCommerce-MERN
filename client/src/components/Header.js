import "./Header.css";

const Header = () => {
  // make a header for a eCommerce with a logo and a search bar
  return (
    <header>
      <div className="logo">
        <img
          className="logo-img"
          src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png"
          alt="coffee logo design creative idea logo elements"
        />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search 🔎</button>
      </div>
      <div className="cart">
        <span className="cart-badge">2</span>
        <img
          className="cart-img"
          src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
          alt="shopping cart"
        />
      </div>
    </header>
  );
};

export default Header;