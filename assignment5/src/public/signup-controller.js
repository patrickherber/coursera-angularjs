(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['InfoService'];
function SignupController(InfoService) {
  var ctrl = this;
  ctrl.service = InfoService;
  ctr.info = service.getInfo();

  ctrl.signup = function() {
    service.saveInfo(ctrl.info);
  }
  ctrl.hasSignedUp = function() {
    return ctrl.info.lastName;
  }
}

})();