import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import logo from "../images/logo.png";
import logo__mobile from "../images/logo_mobile.png";

export const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header__logo__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo amazon" />
        </Link>
      </div>

      <div className="header__logo__mobile__container">
        <Link to="/">
          <img
            className="header__logo__mobile"
            src={logo__mobile}
            alt="logo mobile amazon"
          />
        </Link>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne header__optionLineOne__mobile">
              Olá {user ? `${user.email}` : ""}
            </span>
            <span className="header__optionLineTwo header__optionLineTwo__mobile">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Devoluções</span>
            <span className="header__optionLineTwo">& Pedidos</span>
          </div>
        </Link>

        <div className="header__option header__option-mobile">
          <span className="header__optionLineOne">Seu</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
