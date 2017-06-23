const change_review = require('./lib/change_review');

$(function () {

  //Создать отзыв
  change_review.createReview();
  //Показать содержимое отзыва
  change_review.getReview();
  //Редактирование отзыва
  change_review.editReview();
  //изменить статус отзыва
  change_review.changeStatus();
  //Удалить отзыв
  change_review.deleteReview();

  let elements = document.querySelectorAll('.mdl-js-textfield');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('is-invalid');
  }

  //Подгрузить отзывы о товаре
  $('a[href="#reviews__products"]').click(function () {
    $('#reviews__products').load('/reviews/admin .review__list', {type: 'products'}, () =>{
      //Показать содержимое отзыва
      change_review.getReview();
      //Редактирование отзыва
      change_review.editReview();
      //изменить статус отзыва
      change_review.changeStatus();
      //Удалить отзыв
      change_review.deleteReview();
    });
  });

  //Подгрузить отзывы о магазине
  $('a[href="#reviews__shop"]').click(function () {
    $('#reviews__shop').load('/reviews/admin .review__list', {type: 'shop'}, () => {
      //Показать содержимое отзыва
      change_review.getReview();
      //Редактирование отзыва
      change_review.editReview();
      //изменить статус отзыва
      change_review.changeStatus();
      //Удалить отзыв
      change_review.deleteReview();
    });
  });


});

