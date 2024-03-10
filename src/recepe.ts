import { Food } from "./foods"
import { Ingredient } from "./ingredient"

export function calculateCalories(recepe: string, foods: { [name: string]: Food }) {
  const ingredients = readIngredients(recepe, foods)
  let calories = 0
  ingredients.forEach(ingrediente =>{
    calories += ingrediente.calories()
  })

  return calories
}


export function readIngredients(noteContent: string, foods: { [name: string]: Food }): Ingredient[] {
  const ingredientLines = noteContent.split('\n').slice(1)

  const ingredients: Ingredient[] = []
  ingredientLines.forEach(ingredientLine => {
    const ingredient = Ingredient.read(ingredientLine, foods)
    
    ingredients.push(ingredient)
  })
  return ingredients
}