import React from "react";
import Cart from "./Cart";

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#!">
          ShopShop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                Shop
              </a>
            </li>
          </ul>
          <Cart count={props.count} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
