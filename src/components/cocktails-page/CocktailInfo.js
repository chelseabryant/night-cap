import React, { useState, useEffect } from "react"
import Modal from "../Modal"
import "./CocktailsPage.css"

export default function CocktailInfo({ cocktail }) {
  const [isOpened, setIsOpened] = useState(false)
  const [ingredients, setIngredients] = useState([])
  // [{key: value}, {key: value}]

  const formatData = () => {
    const allIngredientsAndMeasures = []
    for (let i = 1; i < 16; i++) {
      if (cocktail[`strIngredient${i}`] && cocktail[`strMeasure${i}`]) {
        const ingredientAndMeasure = {
          ingredient: cocktail[`strIngredient${i}`],
          measure: cocktail[`strMeasure${i}`],
        }
        allIngredientsAndMeasures.push(ingredientAndMeasure)
      } else {
        break
      }
    }
    setIngredients(allIngredientsAndMeasures)
  }

  useEffect(() => {
    formatData()
  }, [])

  return (
    <div>
      <p>{cocktail.strDrink}</p>
      <img
        src={cocktail.strDrinkThumb}
        className="cocktail-photo"
        alt=""
        onClick={() => setIsOpened(true)}
      />
      <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <h2>{cocktail.strDrink}</h2>
        <img src={cocktail.strDrinkThumb} alt="" className="cocktail-photo" />
        <div>
          <ul>
            <h4>Ingredients</h4>
            {ingredients.map((item) => (
              <li key={item.ingredient}>
                {item.ingredient} - {item.measure}
              </li>
            ))}
          </ul>
          <p>Glass: {cocktail.strGlass}</p>
        </div>
        <p>{cocktail.strInstructions}</p>
      </Modal>
    </div>
  )
}
