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
           readById: readById,
           update: update,
           delete: deleteStudent
        };
        return service;

        ////////////////

        function create(student){
            var defer = $q.defer();

            $http.post(apiUrl + 'students', student)
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

            $http.get( apiUrl + 'students')
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject("Todo not found");
            });

            return defer.promise;
        }

        function readById(student){
            var defer = $q.defer();

            $http.get( apiUrl + 'students/' + student)
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject("Todo not found");
            });

            return defer.promise;
        }
        
        function update(student){
            var defer = $q.defer();

            $http.put(apiUrl + 'students/' + student.id, student)
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject(error);
            });

            return defer.promise;
        }
        
        function deleteStudent(student){
            var defer = $q.defer();

            $http.delete(apiUrl + 'students/' + student.studentId)
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