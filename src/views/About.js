import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../containers/export";
import headerBg from "../assets/header-bg.jpg";
import "../containers/header/Header.scss";
import "./Welcome.scss";
import "../containers/end/End.scss";
import "../components/link/Link";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="header section__padding">
        <div className="welcome">
          <Link className="back" to="/badanie">
            Powrót
          </Link>
          <h2>Na czym polega badanie?</h2>
          <p>
            W pierwszym etapie zostaniesz przekierowany do prototypu strony
            internetowej opisującej butelkę filtrującą Dafi. Oto założenia,
            którymi chcielibyśmy abyś się kierował podczas przeglądania strony:
            <ul>
              <li>
                trafiłeś na stronę klikając w reklamę, ponieważ
                jesteś zainteresowany kupnem butelki
              </li>
              <li>masz nieograniczony budżet pieniężny na zakup butelki</li>
              <li>
                po obejrzeniu strony musisz zdecydować czy kupujesz butelkę czy
                też nie
              </li>
            </ul>
          </p>
          <p>
            Po obejrzeniu strony zostaniesz poproszony o wypełnienie krótkiej
            ankiety. Link do ankiety znajduje się na samym dole strony. Całe
            badanie jest anonimowe, zajmie maksymalnie 5 minut i posłuży nam
            wyłącznie w celach naukowych. Z góry dziękujemy za poświęcony czas.
          </p>
          <div className="links">
            <Link className="link" to="/prototyp">
              Zaczynajmy!
            </Link>
          </div>
        </div>
        <div className="header__image">
          <img className="img" src={headerBg} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
