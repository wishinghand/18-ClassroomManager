(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridCtrl', StudentGridCtrl);

    StudentGridCtrl.$inject = ['$stateParams', '$state', 'StudentFactory'];

    /* @ngInject */
    function StudentGridCtrl($stateParams, $state, StudentFactory) {
        var vm = this;
        vm.student = {};
        vm.students = [];
        vm.addStudent = addStudent;
        vm.addStudentModal = addStudentModal;
        vm.deleteStudent = deleteStudent;

        getStudents();

        ////////////////

        function addStudent(){
            StudentFactory.create(vm.student).then(
                function(student){
                    $('.fullscreen.modal').modal('hide');
                    vm.students.push(student);
                });
        }

        function addStudentModal(){
            $('.fullscreen.modal').modal('show');
        }

        function getStudents() {
            StudentFactory.read().then(
                function(students){
                    vm.students = students;
                });
        }

        function deleteStudent(student) {
          if (confirm("Are you sure you want to remove this student?")) {
            StudentFactory.delete(student).then(
              function() {
                var index = vm.students.indexOf(student);
                vm.students.splice(index, 1);
              }
            );
          }
        }
    }
})();