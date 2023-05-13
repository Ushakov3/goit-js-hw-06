const inputChanges = document.getElementById('validation-input');
console.dir(inputChanges);

inputChanges.addEventListener('blur', event => {
  let dataLength = inputChanges.getAttribute('data-length');
  let eventLength = event.currentTarget.value.length;
  if (dataLength.indexOf(eventLength) !== -1) {
    inputChanges.classList.add('valid');
    inputChanges.classList.remove('invalid');
  } else {
    inputChanges.classList.add('invalid');
    inputChanges.classList.remove('valid');
  }
});
