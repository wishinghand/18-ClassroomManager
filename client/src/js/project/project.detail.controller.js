(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectDetailCtrl', ProjectDetailCtrl);

    ProjectDetailCtrl.$inject = ['$stateParams', '$state', 'ProjectFactory'];

    /* @ngInject */
    function ProjectDetailCtrl($stateParams, $state, ProjectFactory) {
        var vm = this;
        vm.title = 'ProjectDetailCtrl';
        vm.projectCurrent = {};
        vm.editProject = editProject;

        getProjectDetail();

        ////////////////

        function getProjectDetail() {
            var projectId = $stateParams.projectId;
            ProjectFactory.readById(projectId).then(
                function(project){
                    vm.projectCurrent = project;
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