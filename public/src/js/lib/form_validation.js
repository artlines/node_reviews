function formValidation(form) {
  const Validator = require('./validator');
  let errors = document.querySelectorAll('.error-message');
  let data = {
    stopSubmit: false,
    checked: {}
  };

  if(errors){
    errors.forEach((item) => item.remove());
  }

  for (let i = 0, l = form.length; i < l; i++) {
    let input = form[i];
    if (input && input.checkValidity() == false) {
      let inputValidator = new Validator();
      inputValidator.checkValidity(input);
      let customValidityMessage = inputValidator.getInvalidities();
      input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessage + '</p>');
      input.parentNode.classList.add('is-invalid');
      data.stopSubmit = true;
    }else{
      if (input.type === 'button') continue;
      data.checked[input.name] = input.value;
    }
  }
  return data;
}

module.exports = formValidation;