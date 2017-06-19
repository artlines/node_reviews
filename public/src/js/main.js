const xhrPost = require('./lib/xhr_post');
const formValidation = require('./lib/form_validation');
const $ = require('jquery');

window.onload = () => {
  let elements = document.querySelectorAll('.mdl-js-textfield');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('is-invalid');
  }
};

// Свежая кровь
if (document.forms.reviewCreate){
  const reviewCreateForm = document.forms.reviewCreate;
  const reviewCreateSubmit = reviewCreateForm.reviewCreateSubmit;

  reviewCreateSubmit.addEventListener('click', e => {
    let inputs = reviewCreateForm.elements;
    let url = "/reviews/create";
    let data = formValidation(inputs);

    if (data.stopSubmit) {
      e.preventDefault();
    } else {
      e.preventDefault();
      xhrPost(reviewCreateForm.name, data.checked, url);
    };
  });
}

//Показать содержимое отзыва
$('.edit-review__content').click( function(e){
  let review_id = $(this).data('id') || 0;
  let modal_content = document.querySelector('.mdl-dialog__content');
  let url = "/reviews/getOne/"+review_id;
  xhrPost(modal_content, {update: true}, url);
  let dialog = document.querySelector('dialog');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  dialog.showModal();
  dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
  });
});


//Редактирование отзыва
$('#edit_review').click(function (e) {
  let form = document.forms.reviewEdit;
  let inputs = form.elements;
  let review_id = $(form).data('id') || 0;
  let url = "/reviews/edit/"+review_id;
  let data = formValidation(inputs);
  let dialog = document.querySelector('dialog');

  xhrPost(form.name, data.checked, url);
  setTimeout(function () {
    dialog.close();
  }, 3000);
});

//изменить статус отзыва
$('.mdl-switch__input').change( e => {
  let data = {};
  let url = "/reviews/changeStatus";
  data.is_active = +e.target.checked;
  data.id = +e.target.id;
  //console.log(document.forms);
  xhrPost(e.target.name, data, url);
});
