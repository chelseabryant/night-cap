export const getCocktailsByName = async (cocktailName) => {
    const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
        )
        return response.json()
}