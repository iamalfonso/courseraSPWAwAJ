(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;

  service.currentUser = null;
  service.signUpTemporaryFavDish = null;

  service.setCurrentUser = function (user) {
    service.currentUser =  user;
  };

  service.getCurrentUser = function () {
    return service.currentUser;   
  };

}

})();