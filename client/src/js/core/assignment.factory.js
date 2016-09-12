(function() {
    'use strict';

    angular
        .module('app')
        .factory('AssignmentFactory', AssignmentFactory);

    AssignmentFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function AssignmentFactory($http, $q, apiUrl) {
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

            $http.post(apiUrl + 'assignment', todo)
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

            $http.get( apiUrl + 'assignments')
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject("Assignment not found");
            });

            return defer.promise;
        }
        
        function update(todo){
            var defer = $q.defer();

            $http.put(apiUrl + 'assignments/' + todo.id, todo)
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject(error);
            });

            return defer.promise;
        }
        
        function deleteTodo(todo){
            var defer = $q.defer();

            $http.delete(apiUrl + 'assignments/' + todo.id)
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