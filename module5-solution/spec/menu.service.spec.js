describe('menuservice', function() {

	var menuservice;
	var $httpBackend;
	var ApiPath;

  	beforeEach(function () {
	    module('restaurant');

	    inject(function ($injector) {
	      menuservice = $injector.get('MenuService');
	      $httpBackend = $injector.get('$httpBackend');
	      ApiPath = $injector.get('ApiPath');
	    });
  	});

	it('should find favorite item status 200', function() {
		$httpBackend
		.when('GET', ApiPath + '/menu_items/A1.json')
		.respond(200, {});

		menuservice.getSingleItem('A1').then(function(response){
			expect(response.status).toEqual(200);			
		});

		$httpBackend.flush();
	});
});