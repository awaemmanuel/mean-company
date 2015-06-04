/**
*/

'use strict';

angular.module('myApp').controller('MyPageCtrl', ['$scope', 'appItemsList',
function($scope, appItemsList) {
    $scope.items = appItemsList.load({});
    /*
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
	*/
}]);