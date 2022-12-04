import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";

const Navbar = (props) => {
  const { auth } = props;
  const links = auth?.uid ? <SignInLinks /> : null;
  return (
    // <nav>
    //   <div class="nav-wrapper teal accent-2">
    //     <ul id="nav-mobile" class="left">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="About">About</Link>
    //       </li>
    //       <li>
    //         <Link to="Books">Book List</Link>
    //       </li>
    //     </ul>
    //       {links}
    //   </div>
    // </nav>
    <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center ">
        <span class="text-2xl font-[Poppins] cursor-pointer">
          <img class="h-10 inline" src={"/img/KitapLogo.png"} />
        </span>

        <span class="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>

      <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li class="mx-4 my-6 md:my-0">
          <Link to="/" class="text-xl hover:text-cyan-500 duration-500">
            HOME
          </Link>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <Link
            to="About"
            href="#"
            class="text-xl hover:text-cyan-500 duration-500"
          >
            ABOUT
          </Link>
        </li>
        <h2 class=""></h2>
      </ul>
      <ul>
        {links}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
