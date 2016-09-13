(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectGridCtrl', ProjectGridCtrl);

    ProjectGridCtrl.$inject = ['$stateParams', '$state', 'ProjectFactory'];

    /* @ngInject */
    function ProjectGridCtrl($stateParams, $state, ProjectFactory) {
        var vm = this;
        vm.title = 'ProjectGridCtrl';
        vm.project = {};
        vm.projects = [];
        vm.addProject = addProject;
        vm.addProjectModal = addProjectModal;
        vm.deleteProject = deleteProject;

        getProjects();

        ////////////////

        function addProject() {
            ProjectFactory.create(vm.project).then(
                function(project){
                    $('.fullscreen.modal').modal('hide');
                    vm.projects.push(project);
                });
        }

        function addProjectModal() {
            $('.fullscreen.modal').modal('show');
        }

        function getProjects(){
            ProjectFactory.read().then(
                function(projects){
                    vm.projects = projects;
                });
        }

        function deleteProject(project) {
            if (confirm("Are you sure you want to remove this project?")) {
            ProjectFactory.delete(project).then(
              function() {
                var index = vm.projects.indexOf(project);
                vm.students.splice(index, 1);
              }
            );
          }
        }

    }
})();