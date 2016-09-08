(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectGridCtrl', ProjectGridCtrl);

    ProjectGridCtrl.$inject = ['$stateParams', '$state'];

    /* @ngInject */
    function ProjectGridCtrl($stateParams, $state) {
        var vm = this;
        vm.title = 'ProjectGridCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();