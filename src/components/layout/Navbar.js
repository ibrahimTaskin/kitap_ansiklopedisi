import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

export const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper teal accent-2">
        <ul id="nav-mobile" class="left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="Books">Book List</Link>
          </li>
        </ul>
          <SignInLinks />
          <SignOutLinks />
      </div>
    </nav>
  );
};
