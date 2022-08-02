import React, { useState } from "react";
import Modal from "../Modal";
import "./CocktailsPage.css";

export default function CocktailInfo({ cocktail }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <p>{cocktail.strDrink}</p>
      <img src={cocktail.strDrinkThumb} className="cocktail-photo" onClick={() => setIsOpened(true)}/>
    <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
    <p>{cocktail.strDrink}</p>
    </Modal>
    </div>
  );
}
