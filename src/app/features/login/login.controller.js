'use strict';

export default class LoginController {
  constructor($state, $timeout) {
    this.$state = $state;
    this.$timeout = $timeout;
    this.aadhaarInvalid = true;
    this.kycCheck = false;
    this.formInvalid = true;
    this.signingIn = false;
    this.signedIn = false;
    this.aadhaarVerified = false;
  }

  login() {
    this.signingIn = true;
    this.$timeout(() => {
      this.signedIn = true;
      this.signingIn = false;
    }, 1000);
  }

  validateAadhaar() {
    let aadhar = this.aadhar;
    if (aadhar && !isNaN(aadhar) && aadhar.toString().length === 12) {
      this.aadhaarInvalid = false;
    } else {
      this.aadhaarInvalid = true;
    }
  }

  verifyAadhaar() {
    if (this.aadhaarInvalid === false) {
      this.aadhaarVerified = true;
      this.formValidate()
    } else {
      this.aadhaarVerified = false;
    }
  }

  formValidate() {
    let otp = this.otp;
    let kycCheck = this.kycCheck;

    let optValid = (otp && !isNaN(otp) && otp.toString().length === 6)

    if (this.aadhaarVerified === true && kycCheck === true && optValid === true) {
      this.formInvalid = false;
    } else {
      this.formInvalid = true;
    }
  }
}

LoginController.$inject = ['$state', '$timeout'];
