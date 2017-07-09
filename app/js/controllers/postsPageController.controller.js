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
        vm.combinedData = []
        vm.posts = posts;
        vm.users = users;

        vm.$onInit = onInit;
        vm.$onChanges = onChanges;
        
        console.log('PostsPageController', vm);

        activate();
        ///////////////////
        
        function activate(){
            posts().then(users).then(function(){
                console.log(vm.postData);
                console.log(vm.userData);
                combineData();
                alphabetical()
            });
        }

        function posts(){
            return DataService.getPosts().then(function(data){
                vm.postData = data;
            });
        }

        function users(){
            return DataService.getUsers().then(function(data){
                vm.userData = data;
            });
        }

        function getUser(mUserId){
            var user;
            user = vm.userData.find(function(user){
                return user.id === mUserId;
            });
            console.log(mUserId)
            console.log(user)
            return user;
        }

        function combineData(){
            vm.postData.forEach(function(post){
                var user = getUser(post.userId);
                post.user = user;
            });
        }

        function alphabetical(){
            vm.postData.sort(alphabeticalCompare);

            function alphabeticalCompare(r1, r2){
                if(r1.title < r2.title) return -1;
                else return 1;
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