'jquery jend route';
require(['angular'], function () {
	//var ngApp = angular.module('ngApp',['ngRoute']);
	var ngApp = angular.module('ngApp',[]);
	ngApp.directive('header', function () {
		return {
			restrict: 'A',
			templateUrl: 'header.html'
		}
	}).directive('footer', function () {
		return {
			restrict: 'A',
			templateUrl: 'footer.html'
		}
	});
	ngApp.controller('NameCtrl', function ($scope) {
		$scope.wahaha = function () {
			console.log(JEND.page)
		}
	});
	require(['jquery', 'jend'], function () {
		/*ngApp = angular.module('ngApp',['ngRoute']);
		console.log(ngApp.config)
		ngApp.config(function($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: 'header.html',
					controller: 'CountryListCtrl'
				}).
				otherwise({
					redirectTo: '/'
				});
		});
		ngApp.controller('CountryListCtrl', function ($scope, $http){
			console.log('13585575688')
		});
		ngApp.controller('NameCtrl', function ($scope) {
			$scope.wahaha = function () {
				console.log(JEND.page)
			}
		});*/
		//console.log(ngApp)
		//console.log('13585575688'.isMobile())
	})
})