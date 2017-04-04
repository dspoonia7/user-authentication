'use strict';

export default class HomeController {
  constructor() {
    this.emailInvalid = true;
  }

  logout(event) {
    event.preventDefault();
    // ...
  }

  validateEmail(event) {
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (this.name.match(pattern)) {
      this.emailInvalid = false;
    } else {
      this.emailInvalid = true;
    }
  }
}

HomeController.$inject = [];
