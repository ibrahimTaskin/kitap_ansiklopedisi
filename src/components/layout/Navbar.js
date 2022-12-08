import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";

const Navbar = (props) => {
  const { auth } = props;
  const links = auth?.uid ? <SignInLinks /> : null;
  return (
    // <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    //   <div class="flex justify-between items-center ">
    //     <span class="text-2xl font-[Poppins] cursor-pointer">
    //       <img class="h-10 inline" src={"/img/KitapLogo.png"} />
    //     </span>

    //     <span class="text-3xl cursor-pointer mx-2 md:hidden block">
    //       <ion-icon name="menu" onclick="Menu(this)">a</ion-icon>
    //     </span>
    //   </div>

    //   <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
    //     <li class="mx-4 my-6 md:my-0">
    //       <Link to="/" class="text-xl hover:text-cyan-500 duration-500">
    //         HOME
    //       </Link>
    //     </li>
    //     <li class="mx-4 my-6 md:my-0">
    //       <Link
    //         to="About"
    //         href="#"
    //         class="text-xl hover:text-cyan-500 duration-500"
    //       >
    //         ABOUT
    //       </Link>
    //     </li>
    //     <h2 class=""></h2>
    //   </ul>
    //   <ul>
    //     {links}
    //   </ul>
    // </nav>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          <img
            src={"/img/KitapLogo.png"}
            s
            class="h-6 mr-3 sm:h-9"
            alt="kitap_logo"
          />
        </a>
        <div class="flex items-center md:order-2">
          <a
            href="https://ibrahimtaskin.cf/"
            target={"_blank"}
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <img
              class="w-8 h-8 rounded-full"
              src={"/img/profil_s.jpg"}
              alt="ibrahim_taskin"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
