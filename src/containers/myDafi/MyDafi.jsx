import React from "react";
import "./MyDafi.scss";
import mojeDafi from "../../assets/moje-dafi.png";
import { Button } from "../../components/button/Button";

function MyDafi() {
  return (
    <div className="myDafi section__padding">
      <div className="myDafi__image">
        <img src={mojeDafi} alt="" />
      </div>
      <div className="myDafi__content">
        <h2>
          Wymieniaj filtr regularnie z aplikacją <span>MOJE DAFI</span>
        </h2>
        <p>
          Tylko regularna wymiana filtra pozwali uzyskać najlepszą wodę, idealną
          zarówno do picia, jak i gotowania. Nie musisz o tym pamiętać.
        </p>
        <p>
          Zrobi to za Ciebie aplikacja „Moje Dafi”, która przypomni Ci zarówno o
          terminie wymiany filtra, jak również o momencie, w którym należy
          przygotować się do jego zakupu.
        </p>
        <Button
          className="myDafi__btn"
          type="button"
          buttonStyle="btn--secondary"
        >
          Dowiedz się więcej o aplikacji
        </Button>
      </div>
    </div>
  );
}

export default MyDafi;
