'use strict';

/**
 * @ngdoc function
 * @name ehughestaylorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ehughestaylorApp
 */

angular.module('ehughestaylorApp')
.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl){
      $scope.mainImageUrl = imageUrl;
    };
  }]);

