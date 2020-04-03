import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="navLeft">
        <h3>Shortly</h3>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <button className="login">Login</button>
        <button className="signUp">Sign Up</button>
      </div>
    </nav>
  );
};

export default Nav;
