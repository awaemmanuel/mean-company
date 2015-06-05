/**
*/

'use strict';

angular.module('myApp').controller('MyPageCtrl', ['$scope', 'appItemsList',
function($scope, appItemsList) {
    var items =  [
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
        {
            title: 'title6'
        },
        {
            title: 'title7'
        },
    ];

    appItemsList.save(items, {});
    $scope.items = appItemsList.load({});
}]);