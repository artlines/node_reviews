let express = require('express');
let router = express.Router();
let reviews = require('../models/reviews');
let util = require('util');
let validator = require('validator');
let processData = require('../middlewares/reviews');

router.get('/', (req, res, next) => {
  processData.getUserData(req.cookies.ci_session, (err, result) => {
    let user_id = result;
    if(err) console.log(err);
    reviews.getAll(true, (err, result) => {
      if(err) console.log(err);
      processData.unescape(result);
      res.render('reviews', {title: 'hola', reviews: result, user_id: user_id});
    });
  });
});

router.get('/admin', (req, res, next) => {
  processData.getUserData(req.cookies.ci_session, (err, result) => {
    let user_id = JSON.parse(result);
    if(user_id == 1){
      reviews.getAll(false, (err, result) => {
        if(err) console.log(err);
        processData.unescape(result);
        res.render('admin/reviews_admin', {title: 'Редактирование отзывов', reviews: result});
      });
    }else{
     res.redirect('/login');
    }
  });
});


router.post('/create', (req, res, next) => {
  //проверка полей и очитска
  let processedData = processData.validate(req.body);
  if (processedData.errors.length){
    res.send(processedData.errors.join('<br>'));
  }else{
    reviews.create(processedData.checked, (err, result) => {
      if(err) console.log(err);
      if (validator.isNumeric(result) && result > 0)
      res.send('Отзыв успешно добавлен и ждет модерации!');
    });
  }
});

router.get('/delete/:id', (req, res, next) => {
  reviews.delete(req.params.id, (err, result) => {
    if(err) console.log(err);
    res.redirect('/reviews');
  });
});

router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id;
  if (id > 0){
    reviews.edit(req.body, req.params.id, (err, result) => {
      if(err) console.log(err);
      res.send('Успех!');
    });
  }else{
    req.body.user_id = 1;
    let processedData = processData.validate(req.body);
    if (processedData.errors.length){
      res.send(processedData.errors.join('<br>'));
    }else{
      processedData.checked.is_active = 1;
      reviews.create(processedData.checked, (err, result) => {
        if(err) console.log(err);
        if (validator.isNumeric(result) && result > 0)
          res.send('Отзыв успешно добавлен');
      });
    }
  }
});

router.post('/getOne/:id', (req, res, next) => {
  let id = req.params.id;
  if (id > 0){
    reviews.getOne(req.params.id, (err, result) => {
      if(err) console.log(err);
      res.render('review_one', {title: 'Отзыв', review: result[0]});
    });
  }else{
    res.render('review_create', {title: 'Создать отзыв', review: {}});
  }
});


router.post('/changeStatus', (req, res, next) => {
    reviews.changeStatus(req.body, (err, result) => {
      if(err) console.log(err);
      res.send('1');
    });
});

module.exports = router;
