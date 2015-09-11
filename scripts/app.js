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
    'ngTouch',
    'phonecatFilters',
    'phonecatServices', 
    'phonecatAnimations'
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
      .when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      });
  });


<<<<<<< HEAD
angular.module('ehughestaylorApp')
.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http){
  // the http service returns a promis object with a success method.  We call this method to handle
  // the asychronous response and assign the phone data to the scope controlled by this controller as a model called phones
  // Angular detects the JSON response and parses it for us
  $http.get('phones/phones.json').success(function(data){
    $scope.phones = data;
    // $scope.phones = data.splice(0, 5);

  });
  // default value
  $scope.orderProp = 'age';
}]);
=======
>>>>>>> development


