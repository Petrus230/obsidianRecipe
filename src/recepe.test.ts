import { Food } from "./foods";
import { Recipe } from "./recepe";

describe('Recipe', () => {
  it('has ingredientes', () => {
    //arrange
    const input = `# Ingredients:\n- 200 Harina\n- 2 Huevos`

    //act
    const recipe = Recipe.read(input, foods)

    //assert
    expect(recipe.retrieveIngredients()).toEqual(["harina", "huevos"]);
  });

  it('calculates calories for the quantity which are using', () => {
    //arrange
    const text = `# Ingredients:\n- 200 Harina`
    const recipe = Recipe.read(text, foods)


    //act
    const result = recipe.totalCalories()

    //assert
    expect(result).toEqual(200);
  });
});

const foods: { [key: string]: Food } = {
  harina: {
    name: "harina",
    calories: 100,
    fat: 10,
    protein: 5,
    carbohydrates: 70
  },
  huevos: {
    name: "huevos",
    calories: 50,
    fat: 0,
    protein: 0,
    carbohydrates: 0
  }
}