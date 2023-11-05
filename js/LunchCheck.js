(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  CounterController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
    $scope.fruit = "";
    $scope.Lunch = "";

    $scope.sayMessage = function (){
      let FruitValue = $scope.Lunch;
      if(FruitValue.length > 0){
        $scope.fruit = "Enjoy!";
      }else{
        $scope.fruit = "Please enter a value!";
      }
    };

  }
  })();