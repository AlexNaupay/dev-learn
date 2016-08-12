(function(){

    var app = angular.module('app', []);

    // Se pueden injectar en bloques config y provides .. value no
    // constant save a object
    app.constant('constantService', {name: 'kimberly', age: 24});
    app.controller('ConstantController', ['$scope', 'constantService', function($scope, constantService){
        $scope.valor = constantService;  // retrieve the stored value
    }]);


    // value save a object
    app.value('valueService', {name: 'kimberly', age: 24});
    app.controller('ValueController', ['$scope', 'valueService', function($scope, valueService){
        $scope.valor = valueService;  // retrieve the stored value
    }]);




})();