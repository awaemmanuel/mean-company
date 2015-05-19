'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', '$q', function($scope, $timeout, appHttp, UserModel, $location, $q) {

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

	//function asyncFunc(var1, callback) {
	//	$timeout(function() {
	//		console.log('timeout finished');
	//		callback();
	//	}, 3000);
	//	console.log('timeout started');
	//}

	//asyncFunc(5, function() {
	//	console.log('async done');
	//});
	//console.log('next line');

	//// Asynchronous function using a promise
	//function asyncFuncPromise(var1) {
	//	var deferred =$q.defer();
	//	$timeout(function() {
	//		console.log('promise timeout finished');
	//		deferred.resolve(); // Callback called.
	//	}, 3000);
	//	console.log('promise timeout started');
	//	return deferred.promise;
	//}
    //
	//asyncFuncPromise(5)
	//	.then(function() {
	//		console.log('promise done');
	//	});

	// using events, no callbacks or promises
	// promises are generally how things are done.
	$scope.$on('myEvt', function(evt, params) {
		console.log('on myEvt');
	});

	$scope.$broadcast('myEvt', {});
	$timeout(function () {
		$scope.$broadcast('myEvt', {});
	}, 3000);
}]);