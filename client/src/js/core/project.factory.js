(function() {
    'use strict';

    angular
        .module('app')
        .factory('ProjectFactory', ProjectFactory);

    ProjectFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function ProjectFactory($http, $q, apiUrl) {
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

            $http.post(apiUrl + 'project', todo)
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

            $http.get( apiUrl + 'projects')
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject("Project not found");
            });

            return defer.promise;
        }
        
        function update(todo){
            var defer = $q.defer();

            $http.put(apiUrl + 'project/' + todo.id, todo)
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject(error);
            });

            return defer.promise;
        }
        
        function deleteTodo(todo){
            var defer = $q.defer();

            $http.delete(apiUrl + 'project/' + todo.id)
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