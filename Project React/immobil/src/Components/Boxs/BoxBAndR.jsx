import React from "react";
import { Carousel } from "./Carousel";

export const BoxBAndR = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <article key={index} className="box-immo rent">
            <Carousel images={item.pictures} />
            <section className="box-data-container">
              <p className="content town">
                {item.town} {item.postal}
              </p>
              <p className="content build">
                {item.building} {item.nbRoom} pièces
              </p>
              <span className="content-high price">{item.price} €</span>
              <p className="content info">Loyer mensuel, charge comprise .</p>
              <span className="content-high meter">{item.meter} m²</span>
            </section>
          </article>
        );
      })}
    </>
  );
};
