(function() {
    'use strict';

    angular
        .module('GeekSample')
        .controller('PostsPageController', PostsPageController);

    PostsPageController.$inject = ['DataService']

    function PostsPageController(DataService) {
        var vm = this;
  
        vm.posts = [];
        vm.posts = posts;

        vm.alphabetical = alphabetical;
        vm.recomended = recomended;
        vm.$onInit = onInit;
        vm.$onChanges = onChanges;
        
        console.log('PostsPageController', vm);

        activate();
        ///////////////////
        
        function activate(){
            posts();
        }

        function posts(){
            DataService.getPosts().then(function(data){
                vm.posts = data;
                console.log(data);
            })
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