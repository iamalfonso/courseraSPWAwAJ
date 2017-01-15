(function() {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', foundItemsDirective)
	.constant('APIItemSearchBasePath', ' https://davids-restaurant.herokuapp.com/');


	NarrowItDownController.$inject = ['$scope', '$http', 'MenuSearchService'];
	function NarrowItDownController($scope, $http, MenuSearchService){
		var nitdown = this;

		nitdown.searchTerm = "";
		nitdown.found = [];
		nitdown.isFound = true;

		nitdown.narrowitdown = function() {	
			nitdown.isFound = true;	
			if (nitdown.searchTerm.trim().length === 0)	{
				nitdown.isFound =  false;
				return true;
			}
			MenuSearchService.getMatchedMenuItems(nitdown.searchTerm)
			.then(function(result) { 
				nitdown.found = result; 
				if (nitdown.found.length === 0) {
					nitdown.isFound =  false;
				}
			});
		};

		nitdown.onRemove = function(index) {
			nitdown.found.splice(index, 1);
		};
	};

	function foundItemsDirective() {
		var ddo = {
			templateUrl: 'templates/foundItems.html',
			scope: {
				items: '<',
				onRemove: '&'
			}
		};

		return ddo;
	};

	MenuSearchService.$inject = ['$http', 'APIItemSearchBasePath'];
	function MenuSearchService($http, APIItemSearchBasePath) {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
		    var response = $http({
		      method: "GET",
		      url: (APIItemSearchBasePath + "/menu_items.json")
		    });

		    return response.then(function(result) {
		    	return findItems(searchTerm, result.data);
		    });
		};

		function findItems(searchTerm, data) {
			var menuItems = data["menu_items"];

			var found = [];
			for(var i = 0; i < menuItems.length; i++) {
				if (menuItems[i]["description"].toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
					found.push(menuItems[i]);
				}
			}

			return found;
		};
	}
})();