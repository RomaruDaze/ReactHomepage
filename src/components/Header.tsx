import logo from "./images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} />
        <div>
          <img src={logo} />
          <img src={logo} />
        </div>
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
      </div>
      
    </header>
  );
};

export default Header;
