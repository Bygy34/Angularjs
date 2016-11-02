
			






(function () {
   angular.module('todoApp')
  
   .controller('TodoListController', ['$scope', '$http','$rootScope', '$routeParams', 
    function($scope, $http,$rootScope, $routeParams) {
        $scope.users = [];
        $scope.albums = [];
        $scope.photos = [];
        $scope.userId = $routeParams.userId;
        $scope.albumId = $routeParams.albumId;

    $scope.getIdUser = function(userId){
        console.log(userId);
        $scope.userId = userId;
        $http.get('http://jsonplaceholder.typicode.com/albums/' + userId).then(function(response){
        response.data.forEach(function(element){
            $scope.albums.push(element);
        });
    });
    };

    $scope.getIdAlbum = function(albumId){
        console.log(albumId);
        $scope.albumId = albumId;
        $http.get('http://jsonplaceholder.typicode.com/photos' + albumId).then(function(response){
        response.data.forEach(function(element){
            $scope.photos.push(element);
        });
    });
    };    

    $scope.refreshUsers = function() {
        $http.get('http://jsonplaceholder.typicode.com/users').then(function(response){
            response.data.forEach(function(element){
                $scope.users.push(element);
            });
        });
    }
     $scope.refreshUsers();

    $scope.refreshAlbums = function() {
        $http.get('http://jsonplaceholder.typicode.com/albums').then(function(response){
            response.data.forEach(function(element){
                $scope.albums.push(element);
            });
        });
   };
    $scope.refreshAlbums();

    $scope.refreshPhotos = function() {
    $http.get('http://jsonplaceholder.typicode.com/photos').then(function(response){
        response.data.forEach(function(element){
            console.log(element)
            $scope.photos.push(element);
        });
            console.log(response);
    });
    }
     $scope.refreshPhotos();
  }]);
})();