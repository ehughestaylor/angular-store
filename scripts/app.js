'use strict';

/**
 * @ngdoc overview
 * @name ehughestaylorApp
 * @description
 * # ehughestaylorApp
 *
 * Main module of the application.
 */
angular
  .module('ehughestaylorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


angular.module('ehughestaylorApp')
.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http){
  // the http service returns a promis object with a success method.  We call this method to handle
  // the asychronous response and assign the phone data to the scope controlled by this controller as a model called phones
  // Angular detects the JSON response and parses it for us
  $http.get('phones/phones.json').success(function(data){
    $scope.phones = data;
  });
  // default value
  $scope.orderProp = 'age';
}]);


