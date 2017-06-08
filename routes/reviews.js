let express = require('express');
let router = express.Router();
let reviews = require('../models/reviews');
let util = require('util');

/* GET reviews listing. */

/* GET reviews listing. */
router.get('/', (req, res, next) => {
  reviews.getAll((err, result) => {
    if(err) console.log(err);
    res.render('reviews', {title: 'hola', reviews: result});
  });
});

router.post('/create', (req, res, next) => {
  if (!req.body) res.send('create user failed!');
  //проверка полей и очитска
  reviews.create(req.body, (err, result) => {
    if(err) console.log(err);
    res.send('user created with id: ' + result);
  });
});

 /*router.get('/get/:id', (req, res, next) => {
  reviews.getById(req.params.id, (err, result) => {
    if(err) console.log(err);
    res.render('user_one', {title: 'Edit user', user: result});
  });
});
router.get('/delete/:id', (req, res, next) => {
  reviews.delete(req.params.id, (err, result) => {
    if(err) console.log(err);
    res.redirect('/reviews');
  });
});

router.post('/edit/:id', (req, res, next) => {
  reviews.edit(req.body, req.params.id, (err, result) => {
    if(err) console.log(err);
    res.send('user edited!'+util.inspect(result));
  });
});*/

module.exports = router;
