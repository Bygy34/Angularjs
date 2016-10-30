
            var imageApp = angular.module('todoApp',['ngRoute']);  
     imageApp.config(function($routeProvider){
 	  $routeProvider.when('/',{
 	  templateUrl:'Index.html',
 	  controller:'todoApp'
 	  });
 	   $routeProvider.when('/album/:userId',{
 	  templateUrl:'partial/album.html',
 	  controller:'todoApp'
	  });
 	   $routeProvider.when('/Image/:albumId',{
 	  templateUrl:'partial/Image.html',
 	  controller:'todoApp'
 	  });
 	   $routeProvider.otherwise({
 	  redirectTo:'/'
     });
  });
    
 $scope.userId = $routeParams.userId;
 $scope.albumIdd = $routeParams.albumId;