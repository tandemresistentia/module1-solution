(function() {
    'use strict';
    
    angular
        .module('ShoppingListCheckOff')
        .controller('AlreadyBoughtController', AlreadyBoughtController);
        
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }
})();
