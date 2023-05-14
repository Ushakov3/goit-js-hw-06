const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const { email: emailInput, password: passwordInput } = loginForm.elements;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('All fields must be filled!');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(formData);
    loginForm.reset();
  }
});
