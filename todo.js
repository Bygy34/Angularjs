angular.module('todoApp', ['ngRoute'])
  .controller('TodoListController',
   ['$scope', '$http',
    function($scope, $http) {

        $scope.users = [];
        $scope.albums = [];
        $scope.images = [];
        $scope.userIdd = 2;
        $scope.albumIdd = 2;
    
    $scope.getIdUser = function(userId){
        console.log(userId);
        $scope.userIdd = userId;
        $http.get('http://jsonplaceholder.typicode.com/albums/' + userId).then(function(response){
        response.data.forEach(function(element){
            $scope.albums.push(element);
        });
    });
    };

    $scope.getIdAlbum = function(albumId){
        console.log(albumId);
        $scope.albumIdd = albumId;
        $http.get('http://jsonplaceholder.typicode.com/images/' + albumId).then(function(response){
        response.data.forEach(function(element){
            $scope.image.push(element);
        });
    });
    };    

$http.get('http://jsonplaceholder.typicode.com/users').then(function(response){
        response.data.forEach(function(element){
            $scope.users.push(element);
        });
    });

    $http.get('http://jsonplaceholder.typicode.com/albums').then(function(response){
        response.data.forEach(function(element){
            $scope.albums.push(element);
        });
    });

    $http.get('http://jsonplaceholder.typicode.com/photos').then(function(response){
        response.data.forEach(function(element){
            console.log(element)
            $scope.images.push(element);
        });
        console.log(response);
    });
  }]);