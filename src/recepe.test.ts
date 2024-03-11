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
    const result = recipe.totalProperties()

    //assert
    expect(result.calories).toEqual(200);
    expect(result.fat).toEqual(20);
    expect(result.protein).toEqual(10);
    expect(result.carbohydrates).toEqual(140);
  });

  it('calculates the sum of his ingredients', () => {
    //arrange
    const text = `# Ingredients:\n- 100 Harina\n- 100 Huevos`
    const recipe = Recipe.read(text, foods)


    //act
    const result = recipe.totalProperties()

    //assert
    expect(result.calories).toEqual(150);
    expect(result.fat).toEqual(12);
    expect(result.protein).toEqual(9);
    expect(result.carbohydrates).toEqual(75);
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
    fat: 2,
    protein: 4,
    carbohydrates: 5
  }
}