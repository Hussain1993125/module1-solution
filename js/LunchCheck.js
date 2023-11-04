(function () {
    'use restric';
    angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = [$scope];

    function LunchCheckController ($scope){
        $scope.itemLunch = itemLunch;
    };

    $scope.addLunch = function(){
        return "";
    }

}) ();