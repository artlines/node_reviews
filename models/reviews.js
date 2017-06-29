let db = require('../db');

module.exports.create = (data, done) => {
  db.get().query('INSERT INTO reviews SET ?', [data], (err, result) => {
    if (err) return done(err);
    done(null, result.insertId.toString());
  });
};

module.exports.getAll = (filter, done) => {
  let conditions = '';
  let condition_values = [db.config.USER_NAME];
  //показать все отзывы о магазине для админа или активные для пользователя
  if (filter.active){
    conditions = ` AND r.is_active=?`;
    condition_values.push(db.config.ACTIVE);
  }

  if (filter.type == 'products'){
    conditions += ` AND r.product_id IS NOT NULL`;
  }else if(filter.type == 'shop'){
    conditions += ` AND r.product_id IS NULL`;
  }else if(filter.type == 'product_id'){
    conditions += ` AND r.product_id = ${filter.product_id}`;
  }
  
  let sql = `
    SELECT r.id, r.preview, r.text, r.rating, r.user_id,
     r.product_id, r.date, r.is_active, COALESCE(uv.value, '') as name
    FROM reviews r 
    LEFT JOIN users_values uv ON (r.user_id = uv.user_id)
    WHERE uv.option_id = ?`+conditions;

  db.get().query(sql, condition_values, (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.edit = (data, reviewId, done) => {
  db.get().query('UPDATE reviews SET ? WHERE id = ?', [data, reviewId], (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.getOne = (reviewId, done) => {
  db.get().query('SELECT id, rating, preview, text, date FROM reviews WHERE id = ?', [reviewId], (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.changeStatus = (data, done) => {
  db.get().query('UPDATE reviews SET is_active = ? WHERE id = ?', [data.is_active, data.id], (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.delete = (reviewId, done) => {
  db.get().query('DELETE FROM reviews WHERE id = ?', [reviewId], (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};