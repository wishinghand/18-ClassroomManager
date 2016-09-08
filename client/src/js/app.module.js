(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr'])
        .value('apiUrl', 'http://localhost:54591/api/')
        .config(appConfig);

        appConfig.$inject = ["$urlRouterProvider", "$stateProvider"];

        function appConfig($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('dashboard');

            $stateProvider
            .state("dashboard", {
                url: '/dashboard', 
                controller: "DashboardCtrl as dashboard",
                templateUrl: 'js/dashboard/dashboard.html'
            })
            .state('student', {
                url: '/student',
                template: '<div ui-view></div>',
                abstract: true
            })
                .state('student.grid', {
                    url: '/grid',
                    controller: 'StudentGridCtrl as studentGrid',
                    templateUrl: 'js/student/student.grid.html'

                })
                .state('student.detail', {
                    url: '/detail/:studentId',
                    controller: 'StudentDetailCtrl as studentDetail',
                    templateUrl: 'src/js/student/student.detail.html'
                })
            .state('project', {
                url: '/project',
                template: '<div ui-view></div>',
                abstract: true
            })
                .state('project.grid', {
                    url: '/grid',
                    controller: 'ProjectGridCtrl as projectGrid',
                    templateUrl: 'js/project/project.grid.html'

                })
                .state('project.detail', {
                    url: '/detail/:projectId',
                    controller: 'ProjectDetailCtrl as projectDetail',
                    templateUrl: 'js/project/project.detail.html'
                });
        }
})();