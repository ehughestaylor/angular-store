'use strict';

/**
 * @ngdoc function
 * @name ehughestaylorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ehughestaylorApp
 */

angular.module('ehughestaylorApp')
.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

