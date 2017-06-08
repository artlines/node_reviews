function Validator() {}

Validator.prototype = {
  errors: [],
  checkValidity: function(input) {
    var validity = input.validity;
    console.log(validity);

    if (validity.valueMissing) {
      this.addInvalidity('Поле не должно быть пусто!');
    }

    if (validity.patternMismatch) {
      this.addInvalidity('Неверный формат данных');
    }

    if (validity.rangeUnderflow) {
      var min = input.getAttribute('min');
      this.addInvalidity('Минимум ' + min);
    }

    if (validity.typeMismatch) {
      this.addInvalidity('Неверный формат данных');
    }
  },

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity: function(message) {
    this.errors.forEach((item, i, arr) => {if(message == item) arr.splice(i, 1)});
    this.errors.push(message);
  },

  // Получаем общий текст сообщений об ошибках
  getInvalidities: function() {
    console.log(this.errors);

    return this.errors.join('<br>');
  },
};

module.exports = Validator;