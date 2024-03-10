import { Food } from "./foods"

type Ingredient = {
  properties: Food,
  quantity: number
}

export function calculateCalories(recepe: string, foods: { [name: string]: Food }) {
  const ingredients = readIngredients(recepe, foods)
  let calories = 0
  ingredients.forEach(ingrediente =>{
    console.log(ingrediente)
    calories += ingrediente.quantity * ingrediente.properties.calories
  })

  return calories
}


export function readIngredients(noteContent: string, foods: { [name: string]: Food }): Ingredient[] {
  const ingredientLines = noteContent.split('\n').slice(1)

  const ingredients: Ingredient[] = []
  ingredientLines.forEach(ingredientLine => {
    const name = readIngredientName(ingredientLine)
    const quantity = readIngredientQuantity(ingredientLine)
    const ingredient: Ingredient = {
      properties: foods[name],
      quantity
    }
    ingredients.push(ingredient)
  })
  return ingredients
}

function readIngredientName(line: string) {
  return line.slice(1).trim().split(" ")[1].toLocaleLowerCase()
}

function readIngredientQuantity(line: string): number {
  return Number(line.slice(1).trim().split(" ")[0])
}