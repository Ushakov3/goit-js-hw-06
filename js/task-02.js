const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const ingredientsElements = ingredients.map(ingredient => {
  const nameIngredient = document.createElement('li');
  nameIngredient.textContent = ingredient;
  nameIngredient.classList.add('item');
  return nameIngredient;
});

ingredientsList.append(...ingredientsElements);
