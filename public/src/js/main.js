const xhrPost = require('./lib/xhr_post');
const formValidation = require('./lib/form_validation');
const reviewCreateForm = document.forms.reviewCreate;
const reviewCreateSubmit = reviewCreateForm.reviewCreateSubmit;

window.onload = () => {
  let elements = document.querySelectorAll('.mdl-js-textfield');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('is-invalid');
  }
};

// Свежая кровь
reviewCreateSubmit.addEventListener('click', e => {
  let inputs = reviewCreateForm.elements;
  let url = "/reviews/create";
  let data = formValidation(inputs);

  if (data.stopSubmit) {
    e.preventDefault();
  } else {
    xhrPost('reviewCreate', data.checked, url);
  };
});

