let express = require('express');
let router = express.Router();
let reviews = require('../models/reviews');
let config = require('../config');
let validator = require('validator');
let processData = require('../middlewares/reviews');

router.all('/', (req, res, next) => {
  processData.getUserData(req.cookies.ci_session, (err, result) => {
    let user_id = result;
    let filter = {
      active: true,
      type: req.body.type || 'shop',
      product_id: req.body.product_id
    };
    if(err) console.error(err);
    reviews.getAll(filter, (err, result) => {
      if(err) console.error(err);
      processData.unescape(result, (err, r) =>{
        if(err) console.error(err);
        res.render('reviews', {title: 'Отзывы', reviews: r, user_id: user_id});
      });
    });
  });
});

router.all('/admin', (req, res, next) => {
  processData.getUserData(req.cookies.ci_session, (err, result) => {
    let user_id = JSON.parse(result);
    if(user_id == 1){
      let filter = {
        active: false,
        type: req.body.type
      };

      reviews.getAll(filter, (err, result) => {
        if(err) console.error(err);
        processData.unescape(result, (err, r) =>{
          if(err) console.error(err);
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
    if(err) console.error(err);

    if (result.errors.length){
      res.send(result.errors.join('<br>'));
    }else{
      reviews.create(result.checked, (err, result) => {
        if(err) console.error(err);
        if (validator.isNumeric(result) && result > 0)
          res.send(config.REVIEW_CREATE_SUCCESS);
      });
    }
  });
});

router.post('/delete/:id', (req, res, next) => {
  reviews.delete(req.params.id, (err, result) => {
    if(err) console.error(err);
    res.send('ok');
  });
});

router.post('/edit/:id', (req, res, next) => {
  processData.getUserData(req.cookies.ci_session, (err, result) => {
    let user_id = JSON.parse(result);
    if(user_id == 1){
      let id = req.params.id;
      if (id > 0){
        reviews.edit(req.body, id, (err, result) => {
          if(err) console.error(err);
          res.send(config.REVIEW_EDIT_SUCCESS);
        });
      }else {
        req.body.user_id = user_id;
        processData.validate(req.body, (err, result) => {
          if (err) console.error(err);

          if (result.errors.length) {
            res.send(result.errors.join('<br>'));
          } else {
            result.checked.is_active = config.ACTIVE;
            reviews.create(result.checked, (err, result) => {
              if (err) console.error(err);
              if (validator.isNumeric(result) && result > 0)
                res.send('Отзыв успешно добавлен');
            });
          }
        });
      }
    }else{
     res.redirect('/login');
    }
});

router.post('/getOne/:id', (req, res, next) => {
  let id = req.params.id;
  if (id > 0){
    reviews.getOne(id, (err, result) => {
      if(err) console.error(err);
      result[0].url = 'reviews/edit/'+id;
      res.render('review_one', {title: 'Отзыв', review: result[0]});
    });
  }else{
    res.render('review_one', {title: 'Создать отзыв', review: {id: id, url: 'reviews/create'}});
  }
});

router.post('/changeStatus', (req, res, next) => {
    reviews.changeStatus(req.body, (err, result) => {
      if(err) console.error(err);
      res.send('1');
    });
});

module.exports = router;
