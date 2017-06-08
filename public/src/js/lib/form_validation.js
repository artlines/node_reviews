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
    if (input.type === 'submit') continue;
    if (input.checkValidity() == false) {
      let inputValidator = new Validator();
      inputValidator.checkValidity(input);
      let customValidityMessage = inputValidator.getInvalidities();
      input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessage + '</p>')
      data.stopSubmit = true;
    }else{
      data.checked[input.name] = input.value;
    }
  }
  return data;
}

module.exports = formValidation;