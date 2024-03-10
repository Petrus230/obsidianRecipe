import { Food } from "./foods";
import { calculateCalories, readIngredients } from "./recepe";

describe('Recept', () => {
  it('has ingredientes', () => {
    //arrange
    const input = `# Ingredients:\n- Harina\n- Huevos`

    //act
    const ingredients = readIngredients(input)

    //assert
    expect(ingredients).toEqual(['harina', 'huevos']);
  });

  it('calculates total calories', () => {
    //arrange
    const foods: { [key: string]: Food } = {
      harina: {
        name: "harina",
        calories: 200,
        fat: 0,
        protein: 0,
        carbohydrates: 0
      },
      huevos: {
        name: "huevos",
        calories: 50,
        fat: 0,
        protein: 0,
        carbohydrates: 0
      }
    }
    const input = `# Ingredients:\n- Harina\n- Huevos`

    //act
    const result = calculateCalories(input, foods)

    //assert
    expect(result).toEqual(250);
  });
});
