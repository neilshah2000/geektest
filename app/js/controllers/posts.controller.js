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
            var size = '100x100',
                photoItem = photoData.groups[0].items[0],
                url = photoItem.prefix + size + photoItem.suffix;
            return url;
        }

        function onInit(){
            // console.log(vm);
        }

        function onChanges(changes){
            // console.log(changes);   
        }
    }

})();