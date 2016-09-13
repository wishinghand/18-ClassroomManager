(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailCtrl', StudentDetailCtrl);

    StudentDetailCtrl.$inject = ['$stateParams', '$state', 'StudentFactory'];

    /* @ngInject */
    function StudentDetailCtrl($stateParams, $state, StudentFactory) {
        var vm = this;
        vm.title = 'StudentDetailCtrl';
        vm.student = {};
        vm.studentCurrent = {};
        vm.editStudent = editStudent;

        getStudentDetail();

        ////////////////

        function getStudentDetail() {
            var studentId = $stateParams.studentId;
            StudentFactory.readById(studentId).then(
                function(student){
                    vm.studentCurrent = student;
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