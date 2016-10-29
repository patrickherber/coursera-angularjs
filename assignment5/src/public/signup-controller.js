(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['InfoService','ApiPath'];
function SignupController(InfoService,ApiPath) {
  var ctrl = this;
  var service = InfoService;
  ctrl.info = angular.copy(service.getInfo());
  var signedUp = ctrl.info.surname;

  ctrl.signup = function() {
    if (ctrl.surname && ctrl.email && ctrl.phoneMobile && ctrl.favoriteDish) {
      var url = ApiPath + '/menu-items/' + ctrl.favoriteDish + '.json';
      console.log(url);
      var promise = $http({
        method: 'GET',
        url: url
      });
      promise.then(function (response) {
        console.log(response.data);
        service.saveInfo(ctrl.info);
        service.saveFavoriteDish(response.data);
        ctrl.info = angular.copy(service.getInfo());
        signedUp = true;
      })
      .catch(function (error) {
        console.log(error);
      })



    }
  }
  ctrl.hasSignedUp = function() {
    return signedUp;
  }
}

})();
