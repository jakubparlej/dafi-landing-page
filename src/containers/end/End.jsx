import React from "react";
import "./End.scss";

function End() {
  return (
    <div className="end section__margin">
      <hr />
      <h2>Dziękujemy za odwiedzenie strony!</h2>
      <h2>Czy zdecydowałbyś się na zakup butelki filtrującej Dafi?</h2>
      <div className="links">
        <a href="https://forms.gle/exANbsUgoXQpB3BX6">Tak</a>
        <a href="https://forms.gle/exANbsUgoXQpB3BX6">Nie</a>
      </div>
      <p>
        Kliknięcie w przycisk przekieruje Cię do ankiety podsumowującej badanie
      </p>
    </div>
  );
}

export default End;
