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
				.when('/image',{
					templateUrl:'image.html',
					controller:'TodoListController',
				})
				.when('/image/:albumId',{
					templateUrl:'image.html',
					controller:'TodoListController',
				})
				.otherwise({
					redirectTo:'/',
				});

			//$scope.userId = $routeParams.userId;
			//$scope.albumIdd = $routeParams.albumId;
		}]);
})();
