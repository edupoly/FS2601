import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Project
          </Link>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/counter">
                Counter
              </Link>
              <Link class="nav-link" to="/todolist">
                Todolist
              </Link>
              <Link class="nav-link" to="/products">
                Products
              </Link>
              <Link class="nav-link btn btn-success btn-sm" to="/addProduct">
                Add Product
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
