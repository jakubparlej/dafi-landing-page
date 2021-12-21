import React from "react";
import "./FilterSwap.scss";
import { BsChevronRight } from "react-icons/bs";
import krok1 from "../../assets/krok1.svg";
import krok2 from "../../assets/krok2.svg";
import krok3 from "../../assets/krok3.svg";

function FilterSwap() {
  return (
    <div className="filterSwap section__margin">
      <h2>Jak wygląda wymiana filtra?</h2>
      <div className="filterSwap__container">
        <div className="filterSwap__step">
          <h3>Krok 1</h3>
          <img src={krok1} alt="Krok 1" />
          <p>
            Wypłucz nowy filtr pod bieżącą, zimną wodą, a resztę elementów
            butelki umyj w wodzie o temperaturze do 50°C. Butelki nie należy
            wyparzać i myć w zmywarce.
          </p>
        </div>

        <BsChevronRight className="filterSwap__gap-arrow" />
        <div className="filterSwap__step">
          <h3>Krok 2</h3>
          <img src={krok2} alt="Krok 2" />
          <p>
            Napełnij butelkę zimną wodą z kranu. Umieść w środku filtr, zakręć
            ustnik i wstrząśnij kilka razy. Woda może przybrać szarawy odcień od
            węgla - to naturalne zjawisko. Wylej wodę i przepłucz butelkę.
          </p>
        </div>

        <BsChevronRight className="filterSwap__gap-arrow" />
        <div className="filterSwap__step">
          <h3>Krok 3</h3>
          <img src={krok3} alt="Krok 3" />
          <p>
            Napełnij ponownie butelkę świeżą wodą i opróżnij jej zawartość przez
            ustnik. Przepłucz i powtórz czynność. Butelka jest gotowa do użycia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FilterSwap;
