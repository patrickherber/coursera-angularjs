(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['InfoService'];
function SignupController(InfoService) {
  var ctrl = this;
  var service = InfoService;
  ctrl.info = angular.copy(service.getInfo());
  var signedUp = ctrl.info.surname;

  ctrl.signup = function() {
    service.saveInfo(ctrl.info);
    ctrl.info = angular.copy(service.getInfo());
    signedUp = ctrl.info.surname;
  }
  ctrl.hasSignedUp = function() {
    return signedUp;
  }
}

})();
