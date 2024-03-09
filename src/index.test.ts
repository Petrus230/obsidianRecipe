describe('Recept', () => {
  describe('Recept note', () => {
    it('has ingredientes', () => {
      //arrange
      const input = `# Ingredients:\n- Mantequilla\n- Huevos`

      //act
      const ingredients = readIngredients(input)

      //assert
      expect(ingredients).toEqual(['Mantequilla', 'Huevos']);
    });
  });
});

const CSVToJSON = (data: string, delimiter = ','): { [key: string]: {} } => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  const result: { [key: string]: {} } = {}
  data
    .split('\n')
    .slice(2)
    .forEach(v => {
      const values = v.split(delimiter);
      const name1 = values[1]
      const propeties = titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {} as { [key: string]: string }
      );
      result[name1] = propeties

    });

  return result
};

function readIngredients(noteContent: string) {
  const ingredientLines = noteContent.split('\n').slice(1)

  const ingredients: string[] = []
  ingredientLines.forEach(ingredientLine => {

    ingredients.push(readIngredientName(ingredientLine))
  })
  return ingredients
}

function readIngredientName(line: string) {
  return line.slice(1).trim()
}