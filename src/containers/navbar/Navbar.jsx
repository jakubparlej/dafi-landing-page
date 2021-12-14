import React, { useState } from "react";
import { VscClose, VscMenu } from "react-icons/vsc";
import { logo } from "../../assets/export";
import "./Navbar.scss";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar section__padding">
      <a className="navbar__logo" href="index.html">
        <img src={logo} alt="Dafi" />
      </a>
      <div className="navbar__links">
        <p>Kontakt</p>
        <p>Pomoc</p>
        <p>Sklep on-line</p>
        <p>Znajdź sklep</p>
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <VscClose
            className="menuBtn"
            color="#fff"
            size={32}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <VscMenu
            className="menuBtn"
            color="$black"
            size={32}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      {
        <div
          className={
            toggleMenu
              ? "navbar__menu-container active section__padding"
              : "navbar__menu-container section__padding"
          }
        >
          <div className="navbar__menu-links1">
            <p>Poznaj nas</p>
            <p>Jesteśmy EKO</p>
            <p>Produkty</p>
            <p>Strefa DAFI</p>
            <p>Pomoc</p>
            <hr />
          </div>
          <div className="navbar__menu-links2">
            <p>Kontakt</p>
            <p>Sklep on-line</p>
            <p>Znajdź sklep</p>
          </div>
        </div>
      }
    </nav>
  );
}

export default Navbar;
