(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectDetailCtrl', ProjectDetailCtrl);

    ProjectDetailCtrl.$inject = ['$stateParams', '$state', 'ProjectFactory', 'StudentFactory'];

    /* @ngInject */
    function ProjectDetailCtrl($stateParams, $state, ProjectFactory, StudentFactory) {
        var vm = this;
        vm.title = 'ProjectDetailCtrl';
        vm.projectCurrent = {};
        vm.editProject = editProject;

        getProjectDetail();
        getStudents();

        ////////////////

        function getProjectDetail() {
            var projectId = $stateParams.projectId;
            ProjectFactory.readById(projectId).then(
                function(project){
                    vm.projectCurrent = project;
                });
        }

        function getStudents(){
            StudentFactory.read().then(
                function (students) {
                    vm.students = students;
                });
        }

        function editProject(){
            vm.projectNew.projectId = vm.projectCurrent.projectId;
            console.log(vm.projectNew);
            ProjectFactory.update(vm.projectNew).then(
                function(projectInfo){
                    vm.projectCurrent = projectInfo;
                    $('.ui.basic.modal').modal('show');
                });
        }
    }
})();