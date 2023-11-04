(function () {
    'use restric';
    angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope){
        $scope.Lunch = $scope;

        $scope.sayMessage = function () {
            return "Enjoy!";
        };
    }
    
}) ();