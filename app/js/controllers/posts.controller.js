(function() {
    'use strict';

    angular
        .module('GeekSample')
        .controller('PostsController', PostsController);

    function PostsController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onChanges = onChanges
        vm.getImageUrl = getImageUrl;

        //////////

        function getImageUrl(photoData){

            return 'url';
        }

        function onInit(){
            // console.log(vm);
        }

        function onChanges(changes){
            // console.log(changes);   
        }
    }

})();