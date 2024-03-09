describe('Recept note', () => {
  it('has ingredientes', () => {
    //arrange
    const input = `# Ingredients:\n- Mantequilla\n- Huevos`

    //act
    const result = readIngredients(input)

    //assert
    expect(result).toEqual(['Mantequilla', 'Huevos']);
  });
});

function readIngredients(noteContent: string) {
  const ingredientLines = noteContent.split('\n').slice(1)

  const ingredients: string[] = []
  ingredientLines.forEach(ingredientLine => {

    ingredients.push(readIngredientName(ingredientLine))
  })
  return ingredients
}

function readIngredientName(line: string){
  return line.slice(1).trim()
}