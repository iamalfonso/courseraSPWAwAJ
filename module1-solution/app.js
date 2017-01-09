(function() {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.list = '';
		$scope.message = '';
		$scope.msgClass = '';
		$scope.inputClass = '';

		$scope.check = function() {
			var msg = '';

			if ($scope.list.length > 0) {
				var a_list = $scope.list.split(',');
				var validItems = 0;

				for (var i = 0; i < a_list.length; i++) {
					if(a_list[i].trim().length > 0) {
						validItems =  validItems + 1;
					}
				}

				msg = validItems <= 3 ? 'Enjoy!' : 'Too Much!';
				$scope.msgClass = 'green-text';
				$scope.inputClass = 'green-input';
			} else {
				msg = 'Please enter data first';
				$scope.msgClass = 'red-text';
				$scope.inputClass = 'red-input';
			}

			$scope.message = msg;
		};
	};
})();