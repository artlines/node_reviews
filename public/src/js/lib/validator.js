function Validator() {}

Validator.prototype = {
  error: '',
  checkValidity: function(input) {
    var validity = input.validity;

    if (validity.valueMissing) {
      this.addInvalidity('Поле не должно быть пусто!');
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
    this.error = message;
  },

  // Получаем общий текст сообщений об ошибках
  getInvalidities: function() {
    return this.error;
  },
};

module.exports = Validator;