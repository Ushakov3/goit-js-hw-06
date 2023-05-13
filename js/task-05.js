const inputChange = document.getElementById('name-input');
console.log(inputChange);
const titleChange = document.getElementById('name-output');

inputChange.addEventListener('input', event => {
  titleChange.textContent = event.currentTarget.value;
});
