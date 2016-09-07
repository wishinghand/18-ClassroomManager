(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr'])
        .config(appConfig);

        appConfig.$inject = ["$urlRouterProvider", "$stateProvider"];

        function appConfig($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('dashboard');

            $stateProvider
            .state("dashboard", {
                url: '/dashboard', 
                controller: "DashboardCtrl as dashboard",
                templateUrl: 'app/dashboard/dashboard.html'
            })
            .state('student', {
                url: '/student',
                template: '<div ui-view></div>',
                abstract: true
            })
                .state('student.grid', {
                    url: '/grid',
                    controller: 'StudentGridCtrl as studentGrid',
                    templateUrl: 'app/student/student.grid.html'

                })
                .state('student.detail', {
                    url: '/detail/:studentId',
                    templateUrl: 'app/student/student.detail.html',
                    controller: 'StudentDetailCtrl as studentDetail'
                })
            .state('project', {
                url: '/project',
                template: '<div ui-view></div>',
                abstract: true
            })
                .state('project.grid', {
                    url: '/grid',
                    controller: 'ProjectGridCtrl as projectGrid',
                    templateUrl: 'app/project/project.grid.html'

                })
                .state('project.detail', {
                    url: '/detail/:projectId',
                    templateUrl: 'app/project/project.detail.html',
                    controller: 'ProjectDetailCtrl as projectDetail'
                });
        }
})();