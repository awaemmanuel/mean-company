/**
*/

'use strict';

angular.module('myApp').controller('MyPageCtrl', ['$scope',
function($scope) {
    $scope.items = [
        {
            title: 'title1'
        },
        {
            title: 'title3'
        },
        {
            title: 'title3'
        },
        {
            title: 'title4'
        },
        {
            title: 'title5'
        },
    ];
	
}]);