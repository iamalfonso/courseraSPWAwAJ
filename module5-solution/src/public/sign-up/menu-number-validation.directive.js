(function() {
	'use strict';

	angular.module('public')
	.directive('menuitemValid', menuitemValid);

	menuitemValid.$inject = ['MenuService', 'UserService'];
	function menuitemValid(MenuService) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attr, ngModelCtrl) {
				ngModelCtrl.$asyncValidators.invalidDish = function (modelValue, viewValue) {
					return MenuService.getSingleItem(modelValue || viewValue);
				};
			}
		}
	};

})();