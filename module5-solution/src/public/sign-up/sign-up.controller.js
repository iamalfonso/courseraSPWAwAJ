(function() {
	'use strict';

	angular.module('public')
	.controller('SignupController', SignupController);

	SignupController.$inject = ['UserService'];
	function SignupController(UserService) {
		var $ctrl = this;

		$ctrl.form = {};
		$ctrl.saved = false;

		$ctrl.submit = function () {
			UserService.setCurrentUser($ctrl.form);
			$ctrl.saved = true;
		};
	};
})();