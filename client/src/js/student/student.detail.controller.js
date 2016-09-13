(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailCtrl', StudentDetailCtrl);

    StudentDetailCtrl.$inject = ['$stateParams', '$state', 'StudentFactory', 'ProjectFactory'];

    /* @ngInject */
    function StudentDetailCtrl($stateParams, $state, StudentFactory, ProjectFactory) {
        var vm = this;
        vm.title = 'StudentDetailCtrl';
        vm.student = {};
        vm.studentCurrent = {};
        vm.editStudent = editStudent;

        getStudentDetail();
        getProjects();

        ////////////////

        function getStudentDetail() {
            var studentId = $stateParams.studentId;
            StudentFactory.readById(studentId).then(
                function(student){
                    vm.studentCurrent = student;
                });
        }

        function getProjects(){
            ProjectFactory.read().then(
                function(projects){
                    vm.projects = projects;
                });
        }

        function editStudent(){
            vm.studentNew.studentId = vm.studentCurrent.studentId;
            StudentFactory.update(vm.studentNew).then(
                function(studentInfo){
                    vm.studentCurrent = studentInfo;
                    $('.ui.basic.modal').modal('show');
                });
        }
    }
})();