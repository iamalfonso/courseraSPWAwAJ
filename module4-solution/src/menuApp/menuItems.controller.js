(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('MenuItemsController', MenuItemsController);

	MenuItemsController.$inject = ['$stateParams', 'menuList', 'categoriesList'];
	function MenuItemsController($stateParams, menuList, categoriesList) {
		var menuItems = this;

		menuItems.categoryName = getCategoryName($stateParams.categoryShortName, categoriesList.data);
		menuItems.menu = menuList.data["menu_items"];
	};

	function getCategoryName(shortName, list) {
		for (var i = 0; i < list.length; i++) {
			if (list[i]["short_name"] === shortName) {
				return list[i]["name"];
			}
		}
	};
})();