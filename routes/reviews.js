let express = require('express');
let router = express.Router();
let reviews = require('../models/reviews');
let util = require('util');
let validator = require('validator');
let https = require('https');
let bl = require('bl');
let processData = require('../middlewares/reviews');

router.get('/', (req, res, next) => {
  reviews.getAll((err, result) => {
    if(err) console.log(err);
    processData.unescape(result);
    res.render('reviews', {title: 'hola', reviews: result});
  });
});

router.get('/session', (req, res, next) => {
  https.get('https://belleyou.ru/user/unserializeSessionData/?session_id='+req.cookies.ci_session, (response) => {
    let rawData = '';
    response.setEncoding('utf8');
    response.on('data', (row) => rawData += row);
    response.on('error', (e) => console.log(e.message));
    response.on('end', () =>{
      res.send(rawData);
    });
  });
/*  reviews.getSessionData(req.cookies.ci_session, (err, result) => {
    if(err) console.log(err);

    let d = JSON.stringify(result);
    res.send(d);
  });*/
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
  reviews.edit(req.body, req.params.id, (err, result) => {
    if(err) console.log(err);
    res.send('user edited!'+util.inspect(result));
  });
});

module.exports = router;
