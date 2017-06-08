const xhrPost = require('./lib/xhr_post');
const formValidation = require('./lib/form_validation');
const reviewCreateForm = document.forms.reviewCreate;
const reviewCreateSubmit = reviewCreateForm.reviewCreateSubmit;

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

