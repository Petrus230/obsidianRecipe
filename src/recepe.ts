import { Food } from "./foods"

export function calculateCalories(input: string, foods: { [name: string]: Food }) {
  const ingredientes = readIngredients(input)
  let calories = 0
  ingredientes.forEach(ingredientes=>{
    calories += foods[ingredientes].calories
  })

  return calories
}


export function readIngredients(noteContent: string) {
  const ingredientLines = noteContent.split('\n').slice(1)

  const ingredients: string[] = []
  ingredientLines.forEach(ingredientLine => {

    ingredients.push(readIngredientName(ingredientLine).toLocaleLowerCase())
  })
  return ingredients
}

function readIngredientName(line: string) {
  return line.slice(1).trim()
}