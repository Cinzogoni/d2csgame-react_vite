import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Fragment } from "react";

import NavBar from "../../components/NavBar/NavBar";
// import SearchBar from "../../components/SearchBar/SearchBar";
// import HeaderActions from "../HeaderActions/HeaderActions";
// import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

import LanguagesSwitcher from "../../components/LanguagesSwitcher/LanguagesSwitcher";

import { Link } from "react-router-dom";
import routeURLs from "../../routes/routes";

function Header() {
  return (
    <Fragment>
      <div className={cx("header-left")}>
        <Link to={routeURLs.home}>
          <div className={cx("logo")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={cx("img")}
              src="/assets/img/d2csgame-logo.png"
              alt="d2csgame logo"
            />
          </div>
        </Link>
        <NavBar />
      </div>

      <div className={cx("header-right")}>
        {/* <SearchBar /> */}
        {/* <ShoppingCart /> */}
        {/* <HeaderActions /> */}
        <LanguagesSwitcher />
      </div>
    </Fragment>
  );
}

export default Header;
