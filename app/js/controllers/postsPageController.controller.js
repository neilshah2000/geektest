(function() {
    'use strict';

    angular
        .module('GeekSample')
        .controller('PostsPageController', PostsPageController);

    PostsPageController.$inject = ['DataService']

    function PostsPageController(DataService) {
        var vm = this;
  
        vm.postData = [];
        vm.userData = [];
        vm.posts = posts;
        vm.users = users;

        vm.alphabetical = alphabetical;
        vm.recomended = recomended;
        vm.$onInit = onInit;
        vm.$onChanges = onChanges;
        
        console.log('PostsPageController', vm);

        activate();
        ///////////////////
        
        function activate(){
            posts().then(users).then(function(){
                console.log(vm.postData);
                console.log(vm.userData);
            })
        }

        function posts(){
            // DataService.getPosts().then(function(data){
            //     vm.posts = data;
            //     console.log(data);
            // })
            return DataService.getPosts().then(function(data){
                vm.postData = data;
            });
        }

        function users(){
            // DataService.getUsers().then(function(data){
            //     vm.users = data;
            //     console.log(vm.users);
            // });
            return DataService.getUsers().then(function(data){
                vm.userData = data;
            });
        }

        function getUser(mUserId){
            var user;
            user = vm.users.find(function(user){
                return user.userId = mUserId;
            });
            return user;
        }

        function alphabetical(){
            vm.venues.sort(alphabeticalCompare);

            function alphabeticalCompare(r1, r2){
                if(r1.venue.name < r2.venue.name) return -1;
                else return 1;
            }
        }

        function recomended(){
            vm.venues.sort(recomendedCompare);

            function recomendedCompare(r1, r2){
                return (r2.venue.rating - r1.venue.rating)*10;
            }
        }

        function onInit(){
            // console.log(vm);
        }

        function onChanges(changes){
            // console.log(changes);   
        }
    }

})();