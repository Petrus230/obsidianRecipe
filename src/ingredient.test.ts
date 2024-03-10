import { Food } from "./foods"

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

class Ingredient {
  private properties: Food
  private quantity: number

  constructor(properties: Food, quantity: number) {
    this.properties = properties
    this.quantity = quantity
  }

  public showName(){
    return this.properties.name
  }

  public calories(){
    const porcentaje = this.properties.calories/100
    return this.quantity * porcentaje
  }

  public protein(){
    const porcentaje = this.properties.protein/100
    return this.quantity * porcentaje
  }

  public carbohydrates(){
    const porcentaje = this.properties.carbohydrates/100
    return this.quantity * porcentaje
  }

  public fat(){
    const porcentaje = this.properties.fat/100
    return this.quantity * porcentaje
  }

  static read(text: string, foods: { [name: string]: Food }) {
    const name = this.readName(text)
    const properties = foods[name]
    console.log(name, properties)
    const quantity = this.readQuantity(text)

    return new Ingredient(properties, quantity)

  }

  private static readName(line: string): string {
    return line.slice(1).trim().split(" ")[1].toLocaleLowerCase()
  }

  private static readQuantity(line: string): number {
    return Number(line.slice(1).trim().split(" ")[0])
  }
}