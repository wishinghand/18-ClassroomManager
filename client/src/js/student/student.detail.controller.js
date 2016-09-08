(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailCtrl', StudentDetailCtrl);

    StudentDetailCtrl.$inject = ['$stateParams', '$state'];

    /* @ngInject */
    function StudentDetailCtrl($stateParams, $state) {
        var vm = this;
        vm.title = 'StudentDetailCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();