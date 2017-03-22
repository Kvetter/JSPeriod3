var angular = require("angular");

var myApp = angular.module('myApp', []);

myApp.controller('$scope', function($scope, $http) {
  $scope.formData = {};

  // when landing on the page, get all todos and show them
  $http.get('/api/jokes')
    .success(function (data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function (data) {
      console.log('Error: ' + data);
    });

});