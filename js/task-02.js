const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.getElementById('ingredients');

const listTitlesEl0 = document.createElement('li');
listTitlesEl0.classList.add('item');
listTitlesEl0.textContent = ingredients[0];

const listTitlesEl1 = document.createElement('li');
listTitlesEl1.classList.add('item');
listTitlesEl1.textContent = ingredients[1];

const listTitlesEl2 = document.createElement('li');
listTitlesEl2.classList.add('item');
listTitlesEl2.textContent = ingredients[2];

const listTitlesEl3 = document.createElement('li');
listTitlesEl3.classList.add('item');
listTitlesEl3.textContent = ingredients[3];

const listTitlesEl4 = document.createElement('li');
listTitlesEl4.classList.add('item');
listTitlesEl4.textContent = ingredients[4];

const listTitlesEl5 = document.createElement('li');
listTitlesEl5.classList.add('item');
listTitlesEl5.textContent = ingredients[5];

ingredientsEl.append(
  listTitlesEl0,
  listTitlesEl1,
  listTitlesEl2,
  listTitlesEl3,
  listTitlesEl4,
  listTitlesEl5
);
