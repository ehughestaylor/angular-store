'use strict';

/**
 * @ngdoc filter
 * @name ehughestaylorApp.filter:phoneFilters
 * @function
 * @description
 * # phoneFilters
 * Filter in the ehughestaylorApp.
 */
angular.module('phonecatFilters', [])
  .filter('checkmark', function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    };
  });
