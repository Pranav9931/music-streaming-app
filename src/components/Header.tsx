import React from "react";
import Logo from "../images/Logo customized montserrat white font transparent bg (1).png";
import MenuIcon from "../images/MenuBtn.png";
import "./css/Header.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchIcon from "@material-ui/icons/Search";
import userAvatar from "../images/photo-1535713875002-d1d0cf377fde.jpeg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const { t } = useTranslation();


  const searchTitle = t("searchPlaceholder");
  return (
    <div className="header">

      <div className="MenuIcon">
        <img src={MenuIcon} />
      </div>
      <Link to="/">
        <div className="logo">
          <img src={Logo} />
        </div>
      </Link>

      <div className="searchBar">
        <div className="wrapper"></div>
        <div className="lt-rt-icons">
          <span className="arrow arrow-lt">
            <small>
              <ArrowBackIcon fontSize="small" />
            </small>
          </span>
          <span className="arrow arrow-rt">
            <ArrowForwardIcon fontSize="small" />
          </span>
        </div>

        {/* The Search Bar */}

        <div className="searchForm">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">
              <SearchIcon fontSize="small" />
            </label>
            <input
              type="search"
              name="searchField"
              id="search"
              placeholder={searchTitle}
              required
            />
          </form>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="profileSection">
        <div className="upgrade-btn">{t("Upgrade")}</div>
        <div className="profile">
          <span className="userAvatar">
            <img src={userAvatar} />
          </span>
          <span className="txt">
            <KeyboardArrowDownIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
