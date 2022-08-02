

export async function getCocktailsByIngredient(ingredient) {
    const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    )
    return response.json()
}

