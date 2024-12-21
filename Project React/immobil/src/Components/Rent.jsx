import React from "react";
import { BoxBAndR } from "./Boxs/BoxBAndR";

export const Rent = () => {
  const dataContentRent = [
    {
      pictures: ["appart.webp", "appart2.webp", "appart3.webp"],
      town: "Toulouse",
      postal: "31000",
      building: "Appartement",
      nbRoom: "2",
      price: "600",
      meter: "64",
    },
    {
      pictures: ["appart.webp", "appart2.webp", "appart3.webp"],
      town: "Toulouse",
      postal: "31000",
      building: "Appartement",
      nbRoom: "2",
      price: "600",
      meter: "64",
    },
    {
      pictures: ["appart.webp", "appart2.webp", "appart3.webp"],
      town: "Toulouse",
      postal: "31000",
      building: "Appartement",
      nbRoom: "2",
      price: "600",
      meter: "64",
    },
    {
      pictures: ["appart.webp", "appart2.webp", "appart3.webp"],
      town: "Toulouse",
      postal: "31000",
      building: "Appartement",
      nbRoom: "2",
      price: "600",
      meter: "64",
    },
    {
      pictures: ["appart.webp", "appart2.webp", "appart3.webp"],
      town: "Toulouse",
      postal: "31000",
      building: "Appartement",
      nbRoom: "2",
      price: "600",
      meter: "64",
    },
  ];
  return (
    <section className="section-rent">
      <BoxBAndR data={dataContentRent} />
    </section>
  );
};
