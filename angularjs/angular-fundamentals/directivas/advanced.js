(function(){
    angular.module('app', [])
        .directive('customDirective', [function(){
            return {
                restrict: 'E',
                templateUrl: 'custom-directive.html',
                scope: {
                    dateModel: '='
                },
                controller: function($scope){
                    $scope.dateModel = {
                        prev: 'yesterday',
                        next: 'tomorrow'
                    };
                    console.log('directive start');
                    $scope.username = 'devlion';
                    console.log($scope.dateModel);
                    console.log('directive: ', $scope.text);
                }
            };
        }])
        .controller('ControlController', ['$scope', function($scope){
            console.log('controller start ...');
            $scope.date = { };

            $scope.text = 'alexh';
        }])
})();