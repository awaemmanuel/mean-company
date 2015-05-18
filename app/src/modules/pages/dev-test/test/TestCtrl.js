'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', function($scope, $timeout, appHttp, UserModel, $location) {

	$scope.myVar = 'var13333';
	$scope.user =UserModel.load();
	
	$scope.swipeIt =function(evt, direction, params) {
		console.log('swipe: '+direction);
	};
	
	$scope.tapIt =function(evt, params) {
		console.log('tap');
	};

	function sync(var1) {
		console.log('sync');
		return var1;
	}
	//var syncReturn =sync(5);
	//console.log(syncReturn);

	function asyncFunc(var1, callback) {
		$timeout(function() {
			console.log('timeout finished');
			callback();
		}, 1000);
		console.log('timeout started');
	}

	asyncFunc(5, function() {
		console.log('async done');
	});
	console.log('next line');
}]);