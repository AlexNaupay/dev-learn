(function(){

    var app = angular.module('app', []);

    function functionPersonFactory(initial){
        return new Person(initial);
    }

    // Clase Person
    // Cuando lo inicializamos con un service podemos inyectale un servicio ... ahora value
    function Person (initial){
        this.name = initial.name || 'kimberly';
        this.age = initial.age || 24;

        this.setName = function(name){
            this.name = name;
            return this;
        };

        this.setAge = function(age){
            this.age = age;
            return this;
        };
    }

    // service: value a inyectar
    app.value('personDefault', {name: 'Steff', age: 23});


    // value:personDefault se pasa como parámetro a Person (a su constructor)
    // service: recibe el nombre de la clase a inicializar (y sus dependencias)
    app.service('personService', ['personDefault', Person]);


    // factory: recibe una función factory(y sus dependencias) que se encarga de crear al objeto
    app.factory('personFactory', ['personDefault', function(personDefault){
        return new Person(personDefault);
    }]);
    // factory: recibe una función factory(y sus dependencias) que se encarga de crear al objeto
    app.factory('personFactory2', ['personDefault', functionPersonFactory]);


    app.controller('ServiceController', ['$scope', 'personService','personFactory', 'personFactory2',
        function($scope, personService, personFactory, personFactory2){
            $scope.person = personService; // obtengo una persona

            $scope.person2 = personFactory;

            $scope.person3 = personFactory2;
    }])

})();