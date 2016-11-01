
        (function () {
    ROOT = $('base').attr('href');

    'use strict';   
	
	
	 angular.module('todoApp',['ngRoute'])
     .config(['$stateProvider', '$httpProvider',
	 function ($stateProvider, $httpProvider) {
            $stateProvider.
 	  when('/',{
 	  templateUrl:'index.html',
 	  controller:'todoApp',
 	  })
 	  .when('/album/:userId',{
 	  templateUrl:'album.html',
 	  controller:'todoApp',
	  })
 	  .when('/image/:albumId',{
 	  templateUrl:'image.html',
 	  controller:'todoApp',
 	  })
 	   .otherwise({
 	  redirectTo:'/',
     });

		imageApp.run(function () {

    });
	 $scope.userId = $routeParams.userId;
     $scope.albumIdd = $routeParams.albumId;
		}]);
		});
