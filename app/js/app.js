var app = angular.module('MyApp', ['ngRoute']);




app.config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

        $routeProvider
            .when('/search', {
                templateUrl: './template/search.html',
                controller: 'SearchController'
            })
            .when('/add', {
                templateUrl: './template/add.html',
                controller: 'AddController'
            })
            .when('/edit', {
                templateUrl: './template/edit.html',
                controller: 'EditController'
            })
            .otherwise({ redirectTo: '/search' });

    }
]);
