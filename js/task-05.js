const inputChange = document.getElementById('name-input');
const titleChange = document.getElementById('name-output');

inputChange.addEventListener('input', event => {
  const name =
    event.currentTarget.value.trim() === ''
      ? 'Anonymous'
      : event.currentTarget.value;
  titleChange.textContent = name;
});
