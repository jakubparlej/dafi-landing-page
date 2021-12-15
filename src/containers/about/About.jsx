import React from "react";
import "./About.scss";
import Pros from "../../components/pros/Pros";
import butelka from "../../assets/butelka-niebieska.png";
import Capacity from "../../components/capacity/Capacity";

function About() {
  return (
    <div className="about">
      <h2 className="section__margin">Dlaczego warto wybrać Dafi?</h2>
      <div className="about__container section__margin">
        <div className="about__pros">
          <Pros text="Źródło smacznej wody zawsze pod ręką" />
          <Pros text="Zaspokaja Twoje pragnienie, gdziekolwiek jesteś" />
          <Pros text="Mała butelka, która wyzwala wielką aktywność" />
          <Pros text="Jeden filtr zastępuje nawet 300 półlitrowych butelek jednorazowych!" />
          <Pros text="Pomaga regularnie nawadniać organizm" />
          <Pros text="Oszczędzaj czas i pieniądze, i wpływaj pozytywnie na środowisko" />
        </div>
        <div className="about__image">
          <img src={butelka} alt="" />
        </div>
        <div className="about__capacities">
          <h3>Butelka dla każdego</h3>
          <Capacity liters="0.3l" title="stworzona z myślą o dzieciach" />
          <Capacity
            liters="0.5l"
            title="idealna, by zabrać ją do szkoły, na spacer lub do pracy"
          />
          <Capacity
            liters="0.7l"
            title="sprawdzi się na siłowni czy podczas dalekich podróży"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
