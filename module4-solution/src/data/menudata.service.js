(function() {
	'use strict';
	
	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http', 'APIItemSearchBasePath'];
	function MenuDataService($http, APIItemSearchBasePath) {
		var service = this;


		service.getAllCategories = function() {
		    var response = $http({
		      method: "GET",
		      url: (APIItemSearchBasePath + "/categories.json")
		    });

		    return response;
		};

		service.getItemsForCategory = function(categoryShortName) {
		    var response = $http({
		      method: "GET",
		      url: (APIItemSearchBasePath + "/menu_items.json?category=" + categoryShortName)
		    });

		    return response;
		};		
	};	
})();