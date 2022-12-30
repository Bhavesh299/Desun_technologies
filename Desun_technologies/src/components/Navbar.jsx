import React from "react";
import styled from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styled.navbar}>
      <div>
        <Link to="/">
          <p className={styled.p}>Home</p>
        </Link>
      </div>
      <div>
        <Link to="/checkOut">
          <p className={styled.p}>CheckOut</p>
        </Link>
        <Link to="/cart">
          <p className={styled.p}>Cart</p>
        </Link>
        <Link to="/gameList">
          <p className={styled.p}>Games</p>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <p className={styled.p}>Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
