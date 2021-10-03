import logo from '../logo.webp';
import { useState, useEffect } from 'react';
import './styles.css';

export default function Header({ cartItems }) {
  let localCart = JSON.parse(window.localStorage.getItem("cart"));

  const items = localCart ? localCart.reduce((total, currentItem) => total = total + currentItem.quantity, 0) : 0;

  function getBadge() {
    let myItem = cartItems == null ? items : cartItems;
    let classes = "position-absolute p-1 top-0 end-0 badge bg-";
    classes += myItem == 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <header>
      <nav className="navbar shadow navbar-expand-md navbar-light fixed-top bg-white p-0">
        <div className="container-fluid">
          <a className="text-light text-decoration-none" href="/">
            <img className="header-logo" alt="codingeeks-logo" src={logo}></img>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0 ps-md-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categories">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" tabIndex="-1" aria-disabled="true">About</a>
              </li>
            </ul>
            <form className="d-flex ms-auto">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="px-2 d-flex flex-row align-items-center justify-content-center">
              <a className="text-dark text-decoration-none p-2 position-relative" href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg> <span className={getBadge()}>{cartItems == null ? items : cartItems}</span>
              </a>
            </div>

          </div>


        </div>

      </nav>
    </header>
  );
}