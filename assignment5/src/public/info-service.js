(function () {
"use strict";

angular.module('public')
.service('InfoService', InfoService);

function InfoService() {
  var service = this;
  service.info = {};

  service.getInfo = function() {
    return service.info;
  }
  service.saveInfo = function(updatedInfo) {
    service.info = updatedInfo;
    console.log('Updated info', service.info);
  }
  service.deleteInfo = function() {
    service.info = {};
  }
}

})();
