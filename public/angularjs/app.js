angular.module('airnold', [
    "airnold.controller",
    "airnold.directive",
    "airnold.service",
    "ngRoute",
    "textAngular"
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/angularjs/views/main.html',
                controller: 'mainController'
            })
            .when('/develop/:category', {
                templateUrl: '/angularjs/views/develop.html',
                controller: 'developController',
                // get all develop content in category (using http request)
                resolve : {

                }
            })
            .when('/develop/:category/:num', {
                templateUrl: '/angularjs/views/detailview.html',
                controller: 'developdetailController',
                // get content of num category (using http request)
                resolve : {

                }
            })
            .when('/guestbook', {
                templateUrl: '/angularjs/views/guestbook.html',
                controller: 'guestbookController',
                resolve : {

                }
            })
            .when('/guestbook/:guestbooknum', {
                templateUrl: '/angularjs/views/detailview.html',
                controller: 'guestbookdetailController',
                resolve : {

                }
            })
            .when('/write',{
                templateUrl : '/angularjs/views/writedevelop.html',
                controller : 'writedevelopController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

angular.module('airnold.controller',[
    'ui.bootstrap',
    'ngSanitize',
    'johayo.clock'
]);

angular.module('airnold.directive', []);

angular.module('airnold.service', []);

