angular.module('todoApp', ['ngRoute'])
  .controller('TodoListController',
   ['$scope', '$http',
    function($scope, $http) {
        $scope.users = [];
        $scope.albums = [];
        $scope.images = [];
    var todoList = this;
    todoList.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
    
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
    // $http.get('http://jsonplaceholder.typicode.com/albums').then(function(response){
    //     response.data.forEach(function(element){
    //         $scope.albums.push(element);
    //     });
    // });
//      var imageApp = angular.module('imageApp',['ngRoute']);  
//     imageApp.config(function($routeProvider){
// 	  $routeProvider.when('/',{
// 	  templateUrl:'Index.html',
// 	  controller:'ImageCtrl'
// 	  });
// 	   $routeProvider.when('/album/:userId',{
// 	  templateUrl:'partial/album.html',
// 	  controller:'ImageCtrl'
// 	  });
// 	   $routeProvider.when('/Image',{
// 	  templateUrl:'partial/Image.html',
// 	  controller:'ImageCtrl'
// 	  });
// 	   $routeProvider.otherwise({
// 	  redirectTo:'/'
//     });
//   });
    
// $scope.userId = $routeParams.userId;


  }
   ]);