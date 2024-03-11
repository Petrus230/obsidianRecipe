import { Food as FoodProperties } from "./foods"

export class Ingredient {
  private properties: FoodProperties
  private quantity: number

  constructor(properties: FoodProperties, quantity: number) {
    this.properties = properties
    this.quantity = quantity
  }

  public showName() {
    return this.properties.name
  }

  public calories() {
    const porcentaje = this.properties.calories / 100
    return this.quantity * porcentaje
  }

  public protein() {
    const porcentaje = this.properties.protein / 100
    return this.quantity * porcentaje
  }

  public carbohydrates() {
    const porcentaje = this.properties.carbohydrates / 100
    return this.quantity * porcentaje
  }

  public fat() {
    const porcentaje = this.properties.fat / 100
    return this.quantity * porcentaje
  }

  static read(rawTextLine: string, foodsProperties: { [name: string]: FoodProperties }) {
    const textLine = rawTextLine.slice(1).trim().split(" ")

    const name = this.readName(textLine)
    const quantity = this.readQuantity(textLine)

    return new Ingredient(foodsProperties[name], quantity)
  }

  private static readName(line: string[]): string {

    return line.slice(1).join(" ").toLocaleLowerCase()
  }

  private static readQuantity(line: string[]): number {
    return Number(line[0])
  }
}