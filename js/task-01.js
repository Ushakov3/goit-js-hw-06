const numberOfEl = document.querySelector('#categories');

const numberOfCategory = numberOfEl.children.length;
console.log('Number of categories:', numberOfCategory);
const itemsList = numberOfEl.children;
// console.log(itemsList);
// console.log(typeof itemsList);

const arrItemsList = [...itemsList];
// console.log(arrItemsList);
arrItemsList.forEach(function (item) {
  let categoryTitle = item.querySelector('h2');
  let elementsOfList = item.querySelector('ul').querySelectorAll('li').length;
  console.log('Elements:', elementsOfList);
  console.log('Category:', categoryTitle);
});
