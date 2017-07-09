(function() {
    'use strict';

    angular
        .module('GeekSample')
        .factory('DataService', DataService);

    DataService.$inject = ['$http', '$q'];

    function DataService($http, $q) {
        var service = {
            getPosts: getPosts,
            getUsers: getUsers
        };

        return service;

        ////////////

        function getPosts(){
            var def = $q.defer(),
            url = 'https://jsonplaceholder.typicode.com/posts';

            $http.get(url).then(function(response) {
                def.resolve(response.data);
                console.log(response);
            });

            return def.promise;
        }

        function getUsers(){
            var def = $q.defer(),
            url = 'https://jsonplaceholder.typicode.com/users';

            $http.get(url).then(function(response) {
                def.resolve(response.data);
                console.log(response);
            });

            return def.promise;
        }
    }

})();