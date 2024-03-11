import { Food } from "./foods"
import { Ingredient } from "./ingredient"

export class Recipe {
  ingredients: Ingredient[]

  constructor(ingredients: Ingredient[]) {
    this.ingredients = ingredients
  }

  public retrieveIngredients(): string[] {
    return this.ingredients.map(ingredient => ingredient.showName())
  }

  totalProperties(): Food {
    const total: Food = {
      name: "",
      calories: 0,
      fat: 0,
      protein: 0,
      carbohydrates: 0
    }
    this.ingredients.forEach(
      (ingredient) => {
        total.calories += ingredient.calories()
        total.fat += ingredient.fat()
        total.protein += ingredient.protein()
        total.carbohydrates += ingredient.carbohydrates()
      })

      return total
  }

  static read(text: string, foods: { [name: string]: Food }) {
    const ingredientes = this.readIngredients(text, foods)

    return new Recipe(ingredientes)
  }

  static readIngredients(noteContent: string, foods: { [name: string]: Food }): Ingredient[] {
    const ingredientLines = noteContent.split('\n').slice(1)

    const ingredients: Ingredient[] = []
    ingredientLines.forEach(ingredientLine => {
      const ingredient = Ingredient.read(ingredientLine, foods)

      ingredients.push(ingredient)
    })
    return ingredients
  }
}