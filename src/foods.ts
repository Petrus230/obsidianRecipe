const PROPERTY_ALIAS: Record<keyof Food, string> = {
  "name": "alimentos",
  "fat": "grasas g",
  "protein": "proteína g",
  "calories": "calorias",
  "carbohydrates": "cho t g"
}

export type Food = {
  name: string,
  calories: number,
  fat: number,
  protein: number,
  carbohydrates: number
}

export const readFoodsFromCsv = (data: string, delimiter = ','): {[name: string]: Food} => {
  const propertiesName = data.slice(0, data.indexOf('\n')).split(delimiter).map(x => x.toLocaleLowerCase());
  const result: {[name: string]: Food} = {}
  const foodLines = data
    .split('\n')
    .slice(2)

  foodLines.forEach(foodLine => {
    const values = foodLine.split(delimiter);

    if (invalidLine(values)) return

    const rawProperties = getRawProperties(propertiesName, values)
    const properties = parseProperties(rawProperties)

    result[properties.name] = properties

  });

  return result
};

function parseProperties(rawProperties: { [name: string]: string }): Food {
  const result = blankPropeties()
  const propertiesNames = Object.keys(result) as (keyof Food)[]

  propertiesNames.forEach((propertieName) => {
    if (propertieName === "name") 
      result[propertieName] = rawProperties[PROPERTY_ALIAS[propertieName]].toLowerCase()
    else
      result[propertieName] = Number(rawProperties[PROPERTY_ALIAS[propertieName]])
  })

  return result
}

function invalidLine(values: string[]): boolean {
  return values.length < 2
}


const blankPropeties = (): Food => {
  return {
    name: "",
    calories: 0,
    fat: 0,
    protein: 0,
    carbohydrates: 0
  }
}

function getRawProperties(propertiesName: string[], values: string[]) {
  return propertiesName.reduce(
    (properties, title, index) => ((properties[title] = values[index]), properties),
    {} as { [key: string]: string }
  );
}