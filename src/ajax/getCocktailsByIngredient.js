

export async function getCocktailsByIngredient() {
    const response = await fetch(
        "https://thecocktaildb.com/api/json/v1/1/search.php?i=vodka"
    )
    return response.json()
}

