import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevisionSimple } from "react-icons/pi";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow("top");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate(`/`)}>
          <img src={logo} alt="logo" />
        </div>
        {mobileMenu ? (
          <ul className="menuItems">
            <button
              className="Btn"
              onClick={() => {
                navigate("/subscription");
              }}
            ></button>
            <li className="menuItemmob" onClick={() => navigate(`/`)}>
              Home
            </li>
            <li
              className="menuItemmob"
              onClick={() => navigationHandler("movie")}
            >
              Movie
            </li>
            <li className="menuItemmob" onClick={() => navigationHandler("tv")}>
              TV Shows
            </li>
            <li className="menuItem">
              <HiOutlineSearch onClick={openSearch} />
            </li>
            <li className="menuItemmob">My Space</li>
          </ul>
        ) : (
          <ul className="menuItems">
            <button
              className="Btn"
              onClick={() => {
                navigate("/subscription");
              }}
            ></button>

            <li className="menuItemdesk" onClick={() => navigate(`/`)}>
              <GoHomeFill />
            </li>
            <li
              className="menuItemdesk"
              onClick={() => navigationHandler("movie")}
            >
              <BiCameraMovie />
            </li>
            <li
              className="menuItemdesk"
              onClick={() => navigationHandler("tv")}
            >
              <PiTelevisionSimple />
            </li>
            <li className="menuItemdesk">
              <HiOutlineSearch onClick={openSearch} />
            </li>
            <li className="menuItemdesk">
              <RxAvatar />
            </li>
          </ul>
        )}

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for movies or tv series..."
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <VscChromeClose
                onClick={() => {
                  setShowSearch(false);
                }}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
