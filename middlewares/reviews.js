let process = {
  validator: require('validator'),
  https: require('https'),

  validate(data, done){
    let processedData = {
      errors: [],
      checked: {}
    };

    if(data.rating && this.validator.isNumeric(data.rating)){
      processedData.checked.rating = data.rating;
    }else{
      processedData.errors.push('Некорректно введен рейтинг');
    }

    if(data.user_id){
      processedData.checked.user_id = data.user_id;
    }else{
      processedData.errors.push('Необходимо авторизоваться/зарегистрироваться');
    }

    if(data.product_id){
      processedData.checked.product_id = data.product_id;
    }else{
      processedData.checked.product_id = null;
    }

    if(data.text){
      processedData.checked.text = this.validator.escape(data.text);
    }else{
      processedData.errors.push('Некорректно введен отзыв');
    }

    if(data.preview){
      processedData.checked.preview =  this.validator.escape(data.preview);
    }else{
      processedData.checked.preview = processedData.checked.text.substring(0,200);
    }

    done(null, processedData);

  },

  unescape(data, done){
    for(let key in data){
      data[key].text = this.validator.unescape(data[key].text);
      data[key].preview = this.validator.unescape(data[key].preview);
    }
    this.checkProductRating(data, (err, data) =>{
      if(err) console.error(err);
      done(null, data);
    });
  },
  checkProductRating(data, done){
    let shop_rating = 0;
    let product_rating = 0;
    let product_counter = 0;
    let shop_counter = 0;
    for(let key in data){
      if(data[key].product_id > 0){
        product_rating += data[key].rating;
        product_counter++;
      }else{
        shop_rating += data[key].rating;
        shop_counter++;
      }
    }
    data.product_rating = Math.round(parseFloat(product_rating / product_counter) * 100) / 100;
    data.shop_rating = Math.round(parseFloat(shop_rating / shop_counter) * 100) / 100;
    done(null, data);
  },

  getUserData(session_id, done){
    this.https.get('https://belleyou.ru/user/unserializeSessionData/?session_id='+session_id, (response) => {
      let rawData = '';
      response.setEncoding('utf8');
      response.on('data', (row) => rawData += row);
      response.on('error', (e) => console.log(e.message));
      response.on('end', () =>{
        rawData = rawData ? rawData : 0;
        done(null, rawData);
      });
    });
  }
};

module.exports = process;
