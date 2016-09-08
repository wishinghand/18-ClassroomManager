(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectDetailCtrl', ProjectDetailCtrl);

    ProjectDetailCtrl.$inject = ['$stateParams', '$state'];

    /* @ngInject */
    function ProjectDetailCtrl($stateParams, $state) {
        var vm = this;
        vm.title = 'ProjectDetailCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();