(function() {
    'use strict';
    
    angular
        .module('ShoppingListCheckOff')
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    function ShoppingListCheckOffService() {
        var service = this;
        
        // List of items to buy
        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "apples", quantity: 5 },
            { name: "milk cartons", quantity: 2 },
            { name: "bread loaves", quantity: 3 },
            { name: "chocolate bars", quantity: 7 }
        ];
        
        // List of bought items
        var boughtItems = [];
        
        service.getToBuyItems = function() {
            return toBuyItems;
        };
        
        service.getBoughtItems = function() {
            return boughtItems;
        };
        
        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(item);
        };
    }
})();
