const Header = () => (
  <nav>
    <div className="nav-wrapper" style={{backgroundColor: "#003865", fontFamily: "sans-serif"}}>
      <a href="#" className="brand-logo right">.roaree</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="">About</a></li>
        <li><a href="">Community</a></li>
        <li><a href="">Models</a></li>
        <li><a href="">Pipelines</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Header;