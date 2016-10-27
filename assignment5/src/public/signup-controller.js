(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['InfoService'];
function SignupController(InfoService) {
  var ctrl = this;
  ctrl.service = service;
  ctr.info = service.getInfo();

  ctrl.signup = function() {
    service.saveInfo(ctrl.info);
  }
}

})();
