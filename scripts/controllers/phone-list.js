'use strict';

/**
 * @ngdoc function
 * @name ehughestaylorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ehughestaylorApp
 */

angular.module('ehughestaylorApp')
.controller('PhoneListCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
    $scope.phones = Phone.query();

    $scope.orderProp = 'age';
  }]);