describe('Ingredient', () => {
  it('contains calories', () => {
    //arrange
    const input = `N° de,Alimentos,Calorias,Proteína g,Grasas g,CHO D g,CHO T g,Fibra T g,Calcio mg,Fósforo mg,Hierro mg,Magnesio mg,Zinc mg,Cobre mg,Sodio mg,Potasio mg,Vitamina A ER,b Caroteno ET,Tiamina mg,Riboflavina mg,Niacina mg,Vitamina B6 mg,Acido asc. Mg
    ,,,,,,,,,,,,,,,,,,,,,,
    1,Arroz Blanco,345,8.1,0.7,76.5,77.7,1.2,8,147,0.9,0,0,0,0,0,0,0,0.08,0.04,1.5,0,0`

    //act
    const foods = readFoodsFromCsv(input)


    //assert
    expect(Object.keys(foods).length).toEqual(1);
    expect(foods["Arroz Blanco"]["calorias"]).toEqual("345");
  });
});

type Foods = {
  [name: string]: FoodPropeties
}

type FoodPropeties = {
  calorias: string
}

const readFoodsFromCsv = (data: string, delimiter = ','): Foods => {
  const propertiesName = data.slice(0, data.indexOf('\n')).split(delimiter).map(x => x.toLocaleLowerCase());
  const result: Foods = {}
  const foodLines = data
    .split('\n')
    .slice(2)

  foodLines.forEach(foodLine => {
    const values = foodLine.split(delimiter);
    const name = values[1]

    const rawProperties = propertiesName.reduce(
      (properties, title, index) => ((properties[title] = values[index]), properties),
      {} as {[key:string]: string}
    );

    const properties: FoodPropeties= {calorias: rawProperties["calorias"]}
    result[name] = properties

  });

  return result
};