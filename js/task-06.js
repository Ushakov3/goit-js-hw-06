const inputChanges = document.getElementById('validation-input');

inputChanges.addEventListener('blur', event => {
  let dataLength = inputChanges.getAttribute('data-length');
  let eventLength = event.currentTarget.value.length;
  if (eventLength === Number(dataLength)) {
    inputChanges.classList.add('valid');
    inputChanges.classList.remove('invalid');
  } else {
    inputChanges.classList.add('invalid');
    inputChanges.classList.remove('valid');
  }
});
