(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$stateParams', '$state'];

    /* @ngInject */
    function DashboardCtrl($stateParams, $state) {
        var vm = this;
        vm.title = 'DashboardCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();