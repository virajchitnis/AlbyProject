var mainController = angular.module('mainController', []);

mainController.controller('HomeController', ['$scope', 'Products', function($scope, Products) {
	$scope.products = Products;
}]);