const email = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const domain =
  /^\s*(([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?(.[a-zA-Z0-9]{2,6})+)+\s*,\s*)*([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?(.[a-zA-Z0-9]{2,6})+)$/i;
const date =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const phone = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
class Validator {
  isEmail(value) {
    if (value.match(email)) {
      return true;
    }
    return false;
  }
  isDomain(value) {
    if (value.match(domain)) {
      return true;
    }
    return false;
  }
  isDate(value) {
    if (value.match(date)) {
      return true;
    }
    return false;
  }
  isPhone(value) {
    if (value.match(phone)) {
      return true;
    }
    return false;
  }
}
let validator = new Validator();
console.log(validator.isEmail("alisa@mail.ru"));
console.log(validator.isDomain("itgirlschool.ru"));
console.log(validator.isDate("12.05.2021"));
console.log(validator.isPhone("+7(910)123-45-67"));

class ValidatorStatic {
  static isEmail(value) {
    if (value.match(email)) {
      return true;
    }
    return false;
  }
  static isDomain(value) {
    if (value.match(domain)) {
      return true;
    }
    return false;
  }
  static isDate(value) {
    if (value.match(date)) {
      return true;
    }
    return false;
  }
  static isPhone(value) {
    if (value.match(phone)) {
      return true;
    }
    return false;
  }
}
console.log(ValidatorStatic.isEmail("alisa@mail.ru"));
console.log(ValidatorStatic.isDomain("itgirlschool.ru"));
console.log(ValidatorStatic.isDate("12.05.2021"));
console.log(ValidatorStatic.isPhone("+7(910)123-45-67"));