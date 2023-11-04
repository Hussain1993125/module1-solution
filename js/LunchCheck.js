(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  CounterController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
    $scope.fruit = "";

    $scope.sayMessage = function (){
      if($scope.fruit.length < 1){
        $scope.fruit = "Enter value";
      }else{
        $scope.fruit = "Enjoy!";
      }

    };

  }
  
  })();