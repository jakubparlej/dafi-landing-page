import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../containers/export";
import headerBg from "../assets/header-bg.jpg";
import "../containers/header/Header.scss";
import "./Welcome.scss";
import "../containers/end/End.scss";

const Welcome = () => {
  return (
    <>
      <Navbar />
      <div className="header section__padding">
        <div className="welcome">
          <h1>Witamy na naszej stronie!</h1>
          <p>
            Jesteśmy studentami II roku Designu i zarządzania projektami na
            Politechnice Częstochowskiej i w ramach zajęć zaprojektowaliśmy ten
            oto prototyp strony internetowej opisującej produkt jakim jest
            butelka filtrująca Dafi.
          </p>
          <p>
            Celem tego projektu jest zbadanie doświadczeń użytkownika (User
            Experience) podczas korzystania ze strony oraz wskaźnika konwersji
            sprzedaży.
          </p>
          <p>
            Jeśli jesteś zainteresowany wzięciem udziału w naszym badaniu,
            kliknij w poniższy przycisk aby dowiedzieć się więcej.
          </p>
          <div className="links">
            <Link className="link" to="/o-badaniu">
              Chcę wziąć udział w badaniu
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

export default Welcome;
