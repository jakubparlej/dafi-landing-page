import React from "react";
import "./Creator.scss";
import { Button } from "../../components/button/Button";
import butelki from "../../assets/butelki.svg";

function Creator() {
  return (
    <div className="creator section__margin">
      <h2>
        Spersonalizuj swoją
        <span>
          <span> b</span>
          <span>u</span>
          <span>t</span>
          <span>e</span>
          <span>l</span>
          <span>k</span>
          <span>ę</span>
        </span>
      </h2>
      <div className="creator__container">
        <div className="creator__content">
          <h3>Twoja butelka Dafi może być wyjątkowa</h3>
          <p>
            <span>Dopasuj ją do siebie!</span> Skorzystaj z naszego kreatora i
            zaprojektuj swoją wymarzoną butelkę. Wybierz{" "}
            <strong>rozmiar</strong> butelki, <strong>kolor</strong> oraz dodaj
            swój <strong>grawer!</strong>
          </p>
          <Button type="button" buttonStyle="btn--secondary">
            Przejdź do kreatora
          </Button>
        </div>
        <div className="creator__image">
          <img src={butelki} alt="Butelki Dafi" />
        </div>
      </div>
    </div>
  );
}

export default Creator;
