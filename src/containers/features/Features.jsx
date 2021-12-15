import React, { useState } from "react";
import "./Features.scss";
import Feature from "../../components/feature/Feature";
import {
  butelkaEco,
  butelkaSzara,
  butelkaFiltr,
  butelkaPlastik,
  butelkaKorek,
  butelkaUchwyt,
} from "./import";

function Features() {
  const [bottle, setBottle] = useState({ butelkaSzara });
  const [img, setImage] = useState(false);

  return (
    <div className="features section__margin">
      <h2>Co wyróżnia naszą butelkę?</h2>
      <div className="features__container">
        <div className="features__content1">
          <div
            onMouseMove={() => {
              setBottle(butelkaFiltr);
              setImage(true);
            }}
            onMouseOut={() => {
              setBottle(butelkaSzara);
              setImage(false);
            }}
          >
            <Feature
              title="Wymienny filtr węglowy"
              desc="Usuwa smak i zapach chloru z wody kranowej, pozostawiając zawarte w niej cenne minerały."
            />
          </div>

          <div
            onMouseOver={() => {
              setBottle(butelkaEco);
              setImage(true);
            }}
            onMouseOut={() => {
              setBottle(butelkaSzara);
              setImage(false);
            }}
          >
            <Feature
              title="Wielokrotnego użytku"
              desc="Idealna dla ceniących sobie dbanie o środowisko."
            />
          </div>
        </div>
        <div className="features__image">
          {img ? (
            <img src={bottle} alt="butelka" />
          ) : (
            <img src={butelkaSzara} alt="butelka" />
          )}
        </div>
        <div className="features__content2">
          <div
            onMouseOver={() => {
              setBottle(butelkaKorek);
              setImage(true);
            }}
            onMouseOut={() => {
              setBottle(butelkaSzara);
              setImage(false);
            }}
          >
            <Feature
              title="Sportowy korek"
              desc="Zapewnia szczelność podczas aktywności."
            />
          </div>

          <div
            onMouseOver={() => {
              setBottle(butelkaUchwyt);
              setImage(true);
            }}
            onMouseOut={() => {
              setBottle(butelkaSzara);
              setImage(false);
            }}
          >
            <Feature
              title="Wygodny uchwyt"
              desc="Umożliwia przypięcie butelki do paska lub torebki."
            />
          </div>

          <div
            onMouseOver={() => {
              setBottle(butelkaPlastik);
              setImage(true);
            }}
            onMouseOut={() => {
              setBottle(butelkaSzara);
              setImage(false);
            }}
          >
            <Feature
              title="Bezpieczna dla zdrowia"
              desc="Wyprodukowana z tworzyw wolnych od szkodliwego bisfenolu A."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
