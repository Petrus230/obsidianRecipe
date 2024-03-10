import { Food } from "./foods"

export class Ingredient {
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