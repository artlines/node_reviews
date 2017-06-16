let db = require('../db');

module.exports.create = (data, done) => {
  db.get().query('INSERT INTO reviews SET ?', [data], (err, result) => {
    if (err) return done(err);
    done(null, result.insertId.toString());
  });
};

module.exports.getAll = (active, done) => {
  let active_reviews = '';
  let condition_values = [12];
  if (active){
    active_reviews = ` AND r.is_active=?`;
    condition_values.push(db.config.ACTIVE);
  }
  let sql = `
    SELECT r.id, r.preview, r.text, r.rating, r.user_id, r.is_active, uv.value as name
    FROM reviews r 
    LEFT JOIN users_values uv ON (r.user_id = uv.user_id)
    WHERE uv.option_id = ?`+active_reviews;

  db.get().query(sql, condition_values, (err, rows) => {
    if (err) return done(err);
    console.log(rows);
    done(null, rows);
  });
};



module.exports.getSessionData = (id, done) => {
  db.get().query('SELECT * FROM ci_sessions WHERE id=?', id, (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.edit = (data, userId, done) => {
  db.get().query('UPDATE reviews SET ? WHERE id = ?', [data, userId], (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.delete = (userId, done) => {
  db.get().query('DELETE FROM reviews WHERE id = ?', [userId], (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};