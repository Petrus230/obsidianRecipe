type Foods = {
  [name: string]: FoodPropeties
}

type FoodPropeties = {
  calories: string,
  fat: string
}

export const readFoodsFromCsv = (data: string, delimiter = ','): Foods => {
  const propertiesName = data.slice(0, data.indexOf('\n')).split(delimiter).map(x => x.toLocaleLowerCase());
  console.log(propertiesName)
  const result: Foods = {}
  const foodLines = data
    .split('\n')
    .slice(2)

  foodLines.forEach(foodLine => {
    const values = foodLine.split(delimiter);
    const name = values[1]

    const rawProperties = getRawProperties(propertiesName, values)

    const properties: FoodPropeties = {
      calories: rawProperties["calories"],
      fat: rawProperties["grasas g"]
    }

    result[name] = properties

  });

  return result
};

function getRawProperties(propertiesName:string[], values: string[] ) {
  return propertiesName.reduce(
    (properties, title, index) => ((properties[title] = values[index]), properties),
    {} as { [key: string]: string }
  );
}