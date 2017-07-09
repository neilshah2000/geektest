(function() {
    'use strict';

    angular.module('GeekSample', ['ui.router'])
        .component('postsComponent', {
            templateUrl: 'views/posts.html',
            controller: 'PostsController',
            bindings: {
                post: '=',
                test: '@'
            }
        });
    
    angular.module('GeekSample').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/posts');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('posts', {
                url: '/posts',
                templateUrl: 'views/postsPage.html'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('posts.users', {
                url: '/users',
                templateUrl: 'views/usersPage.html'
            })

    });

})();