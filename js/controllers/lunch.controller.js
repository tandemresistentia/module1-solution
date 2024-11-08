(function() {
    'use strict';

    angular
        .module('LunchCheck')
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.lunchItems = '';
        $scope.message = '';
        $scope.messageClass = '';

        $scope.checkIfTooMuch = function() {
            // Clear previous message
            $scope.message = '';
            
            // Trim the input
            var items = $scope.lunchItems.trim();
            
            // Check if empty
            if (items === '') {
                $scope.message = 'Please enter data first';
                $scope.messageClass = 'error';
                return;
            }

            // Split items and filter out empty items
            var itemArray = items.split(',')
                .map(item => item.trim())
                .filter(item => item !== '');
            
            // Check number of items
            if (itemArray.length <= 3) {
                $scope.message = 'Enjoy!';
                $scope.messageClass = 'success';
            } else {
                $scope.message = 'Too much!';
                $scope.messageClass = 'error';
            }
        };
    }
})();
