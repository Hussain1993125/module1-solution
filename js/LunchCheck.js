(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  CounterController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
    $scope.fruit = "";

    $scope.sayMessage = function (){
        $scope.fruit = "Enjoy!";
    };

  }
  })();