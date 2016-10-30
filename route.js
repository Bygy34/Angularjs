
            var imageApp = angular.module('todoApp',['ngRoute']);  
     imageApp.config(function($routeProvider){
 	  $routeProvider.when('/',{
 	  templateUrl:'Index.html',
 	  controller:'ImageCtrl'
 	  });
 	   $routeProvider.when('/album/:userId',{
 	  templateUrl:'partial/album.html',
 	  controller:'ImageCtrl'
	  });
 	   $routeProvider.when('/Image/:albumId',{
 	  templateUrl:'partial/Image.html',
 	  controller:'ImageCtrl'
 	  });
 	   $routeProvider.otherwise({
 	  redirectTo:'/'
     });
  });
    
 $scope.userId = $routeParams.userId;
 $scope.albumIdd = $routeParams.albumId;