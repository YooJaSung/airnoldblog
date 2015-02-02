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
                controller: 'developController'
                // get all develop content in category (using http request)
            })
            .when('/develop/:category/:num', {
                templateUrl: '/angularjs/views/developdetail.html',
                controller: 'developdetailController'
                // get content of num category (using http request)
            })
            .when('/guestbook', {
                templateUrl: '/angularjs/views/guestbook.html',
                controller: 'guestbookController'
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

