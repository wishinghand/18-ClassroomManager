(function() {
    'use strict';

    angular
        .module('app')
        .factory('StudentFactory', StudentFactory);

    StudentFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function StudentFactory($http, $q, apiUrl) {
        var service = {
           create: create,
           read: read,
           update: update,
           delete: deleteTodo
        };
        return service;

        ////////////////

        function create(todo){
            var defer = $q.defer();

            $http.post(apiUrl + 'student', todo)
            .then(
              function(response) {
                defer.resolve(response.data);
              },
              function(error) {
                defer.reject(error);
              }
            );

            return defer.promise;
        }
        
        function read(){
            var defer = $q.defer();

            $http.get( apiUrl + 'student')
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject("Todo not found");
            });

            return defer.promise;
        }
        
        function update(todo){
            var defer = $q.defer();

            $http.put(apiUrl + 'student/' + todo.id, todo)
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject(error);
            });

            return defer.promise;
        }
        
        function deleteTodo(todo){
            var defer = $q.defer();

            $http.delete(apiUrl + 'student/' + todo.id)
            .then(
              function(response) {
                defer.resolve(response.data);
              },
              function(error) {
                defer.reject(error);
              }
            );

            return defer.promise;
        }
    }
})();