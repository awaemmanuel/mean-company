'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', '$q', function($scope, $timeout, appHttp, UserModel, $location, $q) {
	$scope.log = [];
	function logit(text, params) {
		console.log('logit: ' + text);
		$scope.log.push(text);
	}
    $scope.$on('appMyDirectiveEvt1', function(evt, params) {
		logit('controller directive event');
    });

    $scope.funcOne = function() {
        logit('funcOne controller');
    };

	$scope.scopeOne = 'scope one is here now';
	$scope.myVar = 'var13333';
	$scope.user =UserModel.load();

	$scope.swipeIt =function(evt, direction, params) {
		logit('swipe: '+direction);
	};
	
	$scope.tapIt =function(evt, params) {
		logit('tap');
	};

	function sync(var1) {
		logit('sync');
		return var1;
	}
	//var syncReturn =sync(5);
	//logit(syncReturn);

	//function asyncFunc(var1, callback) {
	//	$timeout(function() {
	//		logit('timeout finished');
	//		callback();
	//	}, 3000);
	//	logit('timeout started');
	//}

	//asyncFunc(5, function() {
	//	logit('async done');
	//});
	//logit('next line');

	//// Asynchronous function using a promise
	//function asyncFuncPromise(var1) {
	//	var deferred =$q.defer();
	//	$timeout(function() {
	//		logit('promise timeout finished');
	//		deferred.resolve(); // Callback called.
	//	}, 3000);
	//	logit('promise timeout started');
	//	return deferred.promise;
	//}
    //
	//asyncFuncPromise(5)
	//	.then(function() {
	//		logit('promise done');
	//	});

	// using events, no callbacks or promises
	// promises are generally how things are done.
	$scope.$on('myEvt', function(evt, params) {
		logit('on myEvt');
	});

	$scope.$broadcast('myEvt', {});
	$timeout(function () {
		$scope.$broadcast('myEvt', {});
	}, 3000);
}]);