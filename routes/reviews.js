let express = require('express');
let router = express.Router();
let reviews = require('../models/reviews');
let config = require('../config');
let validator = require('validator');
let processData = require('../middlewares/reviews');

router.get('/', (req, res, next) => {
  processData.getUserData(req.cookies.ci_session, (err, result) => {
    let user_id = result;
    if(err) console.log(err);
    reviews.getAll(true, (err, result) => {
      if(err) console.log(err);
      processData.unescape(result, (err, r) =>{
        if(err) console.log(err);
        res.render('reviews', {title: 'Отывы', reviews: r, user_id: user_id});
      });
    });
  });
});

router.get('/admin', (req, res, next) => {
  processData.getUserData(req.cookies.ci_session, (err, result) => {
    let user_id = JSON.parse(result);
    if(user_id == 1){
      reviews.getAll(false, (err, result) => {
        if(err) console.log(err);
        processData.unescape(result, (err, r) =>{
          if(err) console.log(err);
          res.render('admin/reviews_admin', {title: 'Редактирование отзывов', reviews: r});
        });
      });
    }else{
     res.redirect('/login');
    }
  });
});


router.post('/create', (req, res, next) => {
  //проверка полей и очитска
  processData.validate(req.body, (err, result) => {
    if(err) console.log(err);

    if (result.errors.length){
      res.send(result.errors.join('<br>'));
    }else{
      reviews.create(result.checked, (err, result) => {
        if(err) console.log(err);
        if (validator.isNumeric(result) && result > 0)
          res.send(config.REVIEW_CREATE_SUCCESS);
      });
    }
  });
});

router.post('/delete/:id', (req, res, next) => {
  reviews.delete(req.params.id, (err, result) => {
    if(err) console.log(err);
    res.send('ok');
  });
});

router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id;
  if (id > 0){
    reviews.edit(req.body, id, (err, result) => {
      if(err) console.log(err);
      res.send(config.REVIEW_EDIT_SUCCESS);
    });
  }else {
    req.body.user_id = 1;
    processData.validate(req.body, (err, result) => {
      if (err) console.log(err);

      if (result.errors.length) {
        res.send(result.errors.join('<br>'));
      } else {
        result.checked.is_active = 1;
        reviews.create(result.checked, (err, result) => {
          if (err) console.log(err);
          if (validator.isNumeric(result) && result > 0)
            res.send('Отзыв успешно добавлен');
        });
      }
    });
  }
});

router.post('/getOne/:id', (req, res, next) => {
  let id = req.params.id;
  if (id > 0){
    reviews.getOne(id, (err, result) => {
      if(err) console.log(err);
      result[0].url = 'reviews/edit/'+id;
      res.render('review_one', {title: 'Отзыв', review: result[0]});
    });
  }else{
    res.render('review_one', {title: 'Создать отзыв', review: {id: id, url: 'reviews/create'}});
  }
});

router.post('/changeStatus', (req, res, next) => {
    reviews.changeStatus(req.body, (err, result) => {
      if(err) console.log(err);
      res.send('1');
    });
});

module.exports = router;
