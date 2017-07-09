(function() {
    'use strict';

    angular.module('GeekSample', [])
        .component('postsComponent', {
            templateUrl: 'views/posts.html',
            controller: 'PostsController',
            bindings: {
                post: '=',
                test: '@'
            }
        })


})();