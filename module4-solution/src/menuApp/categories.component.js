(function() {
	'use strict';

	angular.module('MenuApp')
	.component('categoriesList', {
		templateUrl: 'src/menuApp/templates/categories-list.template.html',
		bindings: {
			items: '<'
		}
	});

})();