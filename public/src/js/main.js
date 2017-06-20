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
    formValidation(inputs, (err, data) => {
      if (data.stopSubmit) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if(err) return false;
        data.formName = reviewCreateForm.name;
        data.url = "/reviews/create";
        xhrPost(data, (err, result) =>{
          if (err) console.log(err);
          reviewCreateForm.name.insertAdjacentHTML('afterend', '<p class="error-message">' + result + '</p>')
        });
      };
    });
  });
}

//Показать содержимое отзыва
$('.edit-review__content').click( function(e){
  let review_id = $(this).data('id') || 0;
  let modal_content = document.querySelector('.mdl-dialog__content');
  let url = "/reviews/getOne/"+review_id;
  xhrPost({url: url}, (err, result) =>{
    if (err) console.log(err);
    modal_content.innerHTML = result;
  });
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
  let dialog = document.querySelector('dialog');
  formValidation(inputs, (err, data) => {
    if(err) return false;
    data.url = "/reviews/edit/"+review_id;

    xhrPost(data, (err, result) =>{
      if (err) console.log(err);
      let snackbarContainer = document.querySelector('#snackbar');
      let data = {
        message: result,
        timeout: 3000,
      };
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
      setTimeout(function () {
        dialog.close();
      }, 2000);
    });
  });

});

//изменить статус отзыва
$('.mdl-switch__input').change( e => {
  let data = {};
  data.url = "/reviews/changeStatus";
  data.is_active = +e.target.checked;
  data.id = +e.target.id;
  //console.log(document.forms);
  xhrPost(data, (err, result) =>{
    if (err) console.log(err);
  });
});

//Удалить отзыв
$('.delete_review').click( function (e) {
  let data = {};
  data.id = $(this).data('id') || 0;
  data.url = "/reviews/delete/"+data.id;
  xhrPost(data, (err, result) => {
    if (err) console.log(err);
    if(result == 'ok'){
      $(this).parents('li').remove();
    }
  });
});
