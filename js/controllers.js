var mainController = angular.module('mainController', []);

mainController.controller('HomeController', ['$scope', '$http', function($scope, $http) {
	$scope.products = [
	{
		name: 'Martigues',
		description: "Description",
		colors: ["Blanc"],
		price: 22.00
	},
	{
		name: 'Toscana',
		description: "Description",
		colors: ["Vert"],
		price: 22.00
	},
	{
		name: 'Pergola',
		description: "Description",
		colors: ["Anis", "Lavande", "Prune"],
		price: 22.00
	},
	{
		name: 'Castellane',
		description: "Description",
		colors: ["Rouge"],
		price: 22.00
	},
	{
		name: 'Pavot',
		description: "Description",
		colors: [],
		price: 22.00
	},
	{
		name: 'Cigale',
		description: "Description",
		colors: ["Naturel", "Bordeux"],
		price: 22.00
	},
	{
		name: 'Tournesol',
		description: "Description",
		colors: ["Blanc/Vert", "Jaune/Rouge"],
		price: 22.00
	},
	{
		name: 'Olive',
		description: "Description",
		colors: ["Blanc/Vert", "Jaune/Rouge"],
		price: 22.00
	},
	{
		name: 'Lavande',
		description: "Description",
		colors: ["Blanc/Beige", "Jaune/Bleu"],
		price: 22.00
	},
	{
		name: 'Citron',
		description: "Description",
		colors: ["Blanc/Beige", "Jaune/Bleu"],
		price: 22.00
	},
	];
}]);