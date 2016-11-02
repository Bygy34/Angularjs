(function () {
	'use strict';

	angular.module('todoApp', [
		'ngRoute',
		'todoApp',
	]);

	angular.module('todoApp').config(['$routeProvider', '$httpProvider',
		function ($routeProvider, $httpProvider) {
			$routeProvider.
				when('/',{
					templateUrl:'main.html',
					controller:'TodoListController',
				})
				.when('/album',{
					templateUrl:'album.html',
					controller:'TodoListController',
				})
				.when('/album/:userId',{
					templateUrl:'album.html',
					controller:'TodoListController',
				})
				.when('/photo',{
					templateUrl:'photo.html',
					controller:'TodoListController',
				})
				.when('/photo/:albumId',{
					templateUrl:'photo.html',
					controller:'TodoListController',
				})
				.otherwise({
					redirectTo:'/',
				});
		}]);
})();
