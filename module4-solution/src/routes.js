(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    //Default route if no state is found
    $urlRouterProvider.otherwise('/');

    //Define all states for app
    $stateProvider
    //home state = /
    .state('home', {
      url: '/',
      templateUrl: 'src/menuApp/templates/home.template.html'
    })
    //categiry list state = /category-list/
    .state('categoryList', {
      url: '/category-list',
      templateUrl: 'src/menuApp/templates/categories.template.html',
      controller: 'CategoriesController as catList',
      resolve: {
        categoriesList: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
                  .catch(function(error) {
                    console.log(error);
                  });
        }]
      }
    })
    //menu for category state = /category-list/menu-items/{categoryShortName}
    .state('categoryList.menuItems', {
      url: '/menu-items/{categoryShortName}',
      templateUrl: 'src/menuApp/templates/menu-items.template.html',
      controller: 'MenuItemsController as menuItems',
      params: {
        categoryShortName: null,
        categoryName: null
      },
      resolve: {
        menuList: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                  .catch(function(error) {
                    console.log(error);
                  });
        }]
      }      
    });

  }

})();
