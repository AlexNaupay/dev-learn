(function(){

    var app = angular.module('app', []);

    app.value('algorithm', 'SHA-1');  //SHA-1, MD5, SHA-2-256, SHA-2-512

    app.factory('hash', ['algorithm',function(algorithm_){

        function hashFunction(algorithm){
            var hashFunction = undefined;
            if (algorithm === "MD5") {
                hashFunction = CryptoJS.MD5;
            } else  if (algorithm === "SHA-1") {
                hashFunction = CryptoJS.SHA1;
            } else  if (algorithm === "SHA-2-256") {
                hashFunction = CryptoJS.SHA256;
            } else  if (algorithm === "SHA-2-512") {
                hashFunction = CryptoJS.SHA512;
            } else {
                throw Error("El tipo de algoritmo no es válido: "+algorithm);
            }
            return hashFunction;
        }

        return function (message, algorithm) {
            algorithm = algorithm || algorithm_;  // algorithm_ es obtenido por service:value INYECTADO
            var objHashResult = hashFunction(algorithm)(message);
            return objHashResult.toString(CryptoJS.enc.Base64);
        };

    }]);



    app.controller("FactoryController",["$scope","hash",function($scope,hash) {
        $scope.password = "s3cret";
        //$scope.resultado = hash($scope.password);  // así no trabaja

        $scope.resultado = function(){
            return hash($scope.password);
        };

        $scope.resultado_ = function(){
            return hash($scope.password, 'SHA-1');
        };

        $scope.resultado2 = function(){
            return hash($scope.password, 'MD5');
        };
        $scope.resultado3 = function(){
            return hash($scope.password, 'SHA-2-256');
        };
        $scope.resultado4 = function(){
            return hash($scope.password, 'SHA-2-512');
        }

    }]);



})();