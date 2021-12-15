import React from "react";
import headerBg from "../../assets/header-bg.jpg";
import "./Header.scss";
import { Button } from "../../components/button/Button";
import { Link } from "../../components/link/Link";

function Header() {
  return (
    <div className="header section__padding">
      <div className="header__content">
        <p>Butelka filtrująca Dafi</p>
        <h1>Źródło smacznej wody, zawsze pod ręką</h1>
        <div className="header__buttons">
          <Button type="button" buttonStyle="btn--primary">
            Kup online
          </Button>
          <Link href="#">Dowiedz się więcej</Link>
        </div>
      </div>
      <div className="header__image">
        <img src={headerBg} alt="Butelka filtrująca Dafi" />
      </div>
    </div>
  );
}

export default Header;
