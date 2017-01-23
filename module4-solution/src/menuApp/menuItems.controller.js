(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('MenuItemsController', MenuItemsController);

	MenuItemsController.$inject = ['$stateParams', 'menuList'];
	function MenuItemsController($stateParams, menuList) {
		var menuItems = this;

		menuItems.categoryName = $stateParams.categoryName;
		menuItems.menu = menuList.data["menu_items"];
	};
})();