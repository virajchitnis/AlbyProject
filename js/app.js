var app = angular.module('app', ['ngRoute', 'mainController']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: '/home.html',
		controller: 'HomeController'
	})
	.otherwise({
		redirectTo: '/home'
	});
}]);