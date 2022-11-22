import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

const Navbar = (props) => {
  const {auth} = props;
  const links = auth?.uid ?  <SignInLinks /> :  <SignOutLinks />;
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
          {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return({
    auth:state.firebase.auth
  })
}

export default connect(mapStateToProps)(Navbar);