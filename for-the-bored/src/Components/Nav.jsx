import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="navLeft">
        <h4>Shortly</h4>
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
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Nav;
