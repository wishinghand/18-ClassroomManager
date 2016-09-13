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
           readById: readById,
           update: update,
           delete: deleteProject
        };
        return service;

        ////////////////

        function create(project){
            var defer = $q.defer();

            $http.post(apiUrl + 'projects', project)
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

        function readById(project){
            var defer = $q.defer();
            
            $http.get(apiUrl + 'projects/' + project)
            .then(function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    console.log(error);
                    defer.reject(error);
                }
            );
            
            return defer.promise;
        }
        
        function update(project){
            var defer = $q.defer();

            $http.put(apiUrl + 'projects/' + project.projectId, project)
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject(error);
            });

            return defer.promise;
        }
        
        function deleteProject(project){
            var defer = $q.defer();

            $http.delete(apiUrl + 'projects/' + project.projectId)
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