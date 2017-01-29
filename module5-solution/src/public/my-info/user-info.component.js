(function() {
	'user strict';

	angular.module('public')
	.component('userInfo', {
		templateUrl: 'src/public/my-info/user-info.template.html',
		controller: UserInfoController		
	});

	UserInfoController.$inject = ['UserService', 'MenuService', 'ApiPath'];
	function UserInfoController(UserService, MenuService, ApiPath) {
		var $ctrl = this;
		$ctrl.info = UserService.getCurrentUser();
		$ctrl.dishName = "";
		$ctrl.dishDescription = "";
		$ctrl.srcImage = "";
		$ctrl.basePath = ApiPath;

		$ctrl.$onInit = function() {
			if ($ctrl.info != undefined || $ctrl.info != null) {
				MenuService.getSingleItem($ctrl.info.favoriteDish)
				.then(function(responde) {
					$ctrl.dishName = responde.data.name;
					$ctrl.dishDescription = responde.data.description;
				});
			}
		};
	};	
})();