(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridCtrl', StudentGridCtrl);

    StudentGridCtrl.$inject = ['$stateParams', "$state"];

    /* @ngInject */
    function StudentGridCtrl($stateParams, $state) {
        var vm = this;
        vm.title = 'StudentGridCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();