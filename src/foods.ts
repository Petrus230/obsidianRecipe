const PROPERTY_ALIAS ={ 
  "fat": "grasas g",
  "protein": "proteína g",
  "calories": "calorias"
}

type Foods = {
  [name: string]: FoodPropeties
}

type FoodPropeties = {
  calories: string,
  fat: string,
  protein: string
}

export const readFoodsFromCsv = (data: string, delimiter = ','): Foods => {
  const propertiesName = data.slice(0, data.indexOf('\n')).split(delimiter).map(x => x.toLocaleLowerCase());
  const result: Foods = {}
  const foodLines = data
    .split('\n')
    .slice(2)

  foodLines.forEach(foodLine => {
    const values = foodLine.split(delimiter);
    const name = values[1]

    const rawProperties = getRawProperties(propertiesName, values)
    const properties = parseProperties(rawProperties)

    result[name] = properties

  });

  return result
};

function parseProperties(rawProperties: { [name: string]: string }): FoodPropeties {
  const result = blankPropeties()

  const keyProperties = Object.keys(result) as (keyof FoodPropeties)[]
  keyProperties.forEach((key) =>{
    result[key] = rawProperties[PROPERTY_ALIAS[key]]
  })
  return result
}


const blankPropeties = ():FoodPropeties=>{
  return {
    calories: "0",
    fat: "0",
    protein: "0"
  }
}

function getRawProperties(propertiesName: string[], values: string[]) {
  return propertiesName.reduce(
    (properties, title, index) => ((properties[title] = values[index]), properties),
    {} as { [key: string]: string }
  );
}