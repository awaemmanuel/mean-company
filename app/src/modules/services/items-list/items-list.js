/**
A factory style service (simple but can not be injected during the compile phase like a provider can be), see here for more info: http://stackoverflow.com/questions/15666048/angular-js-service-vs-provider-vs-factory

@toc
//TODO

@usage
//js Angular controller:
angular.module('myApp').controller('TestCtrl', ['$scope', 'appItemsList', function($scope, appItemsList) {
	var retVal =(appItemsList.test('my test val'));
	console.log(retVal);
}]);

*/

'use strict';

angular.module('app').factory('appItemsList', [ function() {

	//public methods & properties that will be returned
	var publicObj ={
		//TODO, i.e.
		save: function(items, params) {
			this.items = items;
		},
		read: function(params) {
			if (!this.items || this.items.length < 1) {
                this.items = [
                    {
                        title: 'title1'
                    },
                    {
                        title: 'title2'
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
                    }
                ];

			}
			return this.items;
		},

		items: [],
		/*
		myPublicProperty: 'some value',
		
		@toc 1.
		@method init
		@param {Object} params
		@return [none]
		init: function(params) {
			//method/function body here
		},
		
		@toc 2.
		@method method2
		@param {String} p1
		@param {Number} p2
		@return {Object} My return object
		method2: function(p1, p2) {
			//method/function body here
		}
		*/
	};
	
	//private methods and properties - should ONLY expose methods and properties publicly (via the 'return' object) that are supposed to be used; everything else (helper methods that aren't supposed to be called externally) should be private.
	/*
	//TODO, i.e.
	@property scopeMap My private property
	@type Object
	var scopeMap ={
		p1: 'yes',
		p2: 'no'
	};
	
	@toc 3.
	@method function1
	@param {String} p1
	@param {Number} p2
	@return {Object} My return object
	function function1(p1, p2) {
		//method/function body here
	}
	*/
	
	return publicObj;
}]);