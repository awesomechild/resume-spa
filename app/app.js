var cvApp = angular.module('cvApp', ['ngMaterial', "ngSanitize", "ui.router"]);

cvApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('view1', {
        url: "/home",
        views: {
                "home": {
                    templateUrl: "partials/home.html"
                },
                "summary": {
                    templateUrl: "partials/summary.html"
                },


                "basicinfo": {
                    templateUrl: "partials/basicinfo.html"
                },
                "experiences": {
                    templateUrl: "partials/experiences.html"
                },
                "projects": {
                    templateUrl: "partials/projects.html"
                },
                "education": {
                    templateUrl: "partials/education.html"
                },
                "skill": {
                    templateUrl: "partials/skills.html"
                }
            }

    })

    .state('view8', {
        url: "/download",
        templateUrl: "partials/download.html"
    });
})
