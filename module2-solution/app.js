(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


	ToBuyController.$inject = [('ShoppingListCheckOffService')];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuy = this;

		toBuy.items = ShoppingListCheckOffService.getToBuyItems();

		toBuy.buy = function(itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	};

	AlreadyBoughtController.$inject = [('ShoppingListCheckOffService')];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBought = this;

		alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
	};

	function ShoppingListCheckOffService() {
		var service = this;

		service.toBuyItems = [
			{ name: "almond milk", quantity: "1 liter"},
			{ name: "banana", quantity: "3"},
			{ name: "frozen blueberries", quantity: "1 bag"},
			{ name: "oats", quantity: "3 box"},
			{ name: "protein powder", quantity: "1 container"},
		];

		service.boughtItems = [];

		service.buyItem = function(itemIndex) {
			var boughtItem = service.toBuyItems[itemIndex];
			service.toBuyItems.splice(itemIndex, 1);
			service.boughtItems.push(boughtItem);
		};

		service.getToBuyItems = function() {
			return service.toBuyItems
		};

		service.getBoughtItems = function() {
			return service.boughtItems;
		};

	};

})();