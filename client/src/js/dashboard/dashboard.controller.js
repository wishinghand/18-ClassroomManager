(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$stateParams', '$state', 'StudentFactory', 'ProjectFactory', 'AssignmentFactory'];

    /* @ngInject */
    function DashboardCtrl($stateParams, $state, StudentFactory, ProjectFactory, AssignmentFactory) {
        var vm = this;
        vm.title = 'DashboardCtrl';

        getStudentsDash();
        getProjectsDash();
        getAssignmentsDash();


        ////////////////
        ///
    

        function getStudentsDash() {
            StudentFactory.read().then(
                function(students){
                    vm.students = students;
                });
        }

        function getProjectsDash(){
            ProjectFactory.read().then(
                function(projects){
                    vm.projects = projects;
                });
        }

        function getAssignmentsDash(){
            AssignmentFactory.read().then(
                function(assignments){
                    vm.assignments = assignments;
                });
        }


    }
})();