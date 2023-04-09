import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="first">
        <h1>LOGO</h1>
      </div>
      <nav className="second">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className="number">+998965241041</div>
    </div>
  );
}

export default Header;
