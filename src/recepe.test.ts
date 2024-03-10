import { Food } from "./foods";
import { calculateCalories, readIngredients } from "./recepe";

describe('Recept', () => {
  it('has ingredientes', () => {
    //arrange
    const input = `# Ingredients:\n- 200 Harina\n- 2 Huevos`

    //act
    const ingredients = readIngredients(input, foods)

    //assert
    expect(ingredients.length).toEqual(2);
  });

  it('calculates calories for the quantity which are using', () => {
    //arrange
    const repece = `# Ingredients:\n- 200 Harina`

    //act
    const result = calculateCalories(repece, foods)

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