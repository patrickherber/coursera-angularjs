(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['InfoService'];
function MyInfoController(InfoService) {
  var ctrl = this;
  var service = InfoService;
  ctrl.info = service.getInfo();

  ctrl.unsubscribe = function() {
    service.deleteInfo();
  }
  ctrl.hasSignedUp = function() {
    return ctrl.info.lastName;
  }
}

})();
