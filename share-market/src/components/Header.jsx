import React from "react";
import { Link } from "react-router-dom";

const Header = ({ currentUser, handleLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {currentUser ? (
            <>
              <li>
                <Link to="/items/new">Add Item</Link>
              </li>
              <li>
                <Link to="/messages">Messages</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
