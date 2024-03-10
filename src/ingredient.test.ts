import { Ingredient } from "./ingredient"

describe("Ingredient", () => {
  it("is readed form a text line and add his propeties", () => {
    const text = "- 200 Harina"
    const food = {
      harina: {
        name: "harina",
        calories: 100,
        fat: 10,
        protein: 5,
        carbohydrates: 70
      }
    }

    const ingredient = Ingredient.read(text, food)

    expect(ingredient.showName()).toEqual("harina")
  })

  it("retrieves the ingredient propeties for the quantity that has been used", () => {
    const text = "- 200 Harina"
    const food = {
      harina: {
        name: "harina",
        calories: 100,
        fat: 10,
        protein: 5,
        carbohydrates: 70
      }
    }

    const ingredient = Ingredient.read(text, food)

    expect(ingredient.calories()).toEqual(200)
    expect(ingredient.fat()).toEqual(20)
    expect(ingredient.protein()).toEqual(10)
    expect(ingredient.carbohydrates()).toEqual(140)
  })
})
