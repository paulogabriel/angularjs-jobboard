// App
var app = angular.module('vagasApp', ['ngRoute']);

// Controllers
app.controller('HomeController', ['$scope', 'vagas', function($scope, vagas) {
  vagas.success(function(data) {
    $scope.vagas = data;
  });
}]);


app.controller('VagaController', ['$scope', 'vagas', '$routeParams', function($scope, vagas, $routeParams) {
  vagas.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);

// Services
app.service('vagas', ['$http', function($http) {
	return $http.get('js/list.json')
	.success(function(data) {
		return data;
	})
	.error(function(data) {
		return data;
	});
}]);

// Routing
app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'HomeController',
    	templateUrl: 'views/home.html'
  	})
  	.when('/#', {
    	controller: 'HomeController',
    	templateUrl: 'views/home.html'
  	})
  	.when('/#/', {
    	controller: 'HomeController',
    	templateUrl: 'views/home.html'
  	})
  	.when('/vagas/:id',{
    	controller: 'VagaController',
    	templateUrl: 'views/vaga.html'
  	})
  	.otherwise({
  		redirectTo: '/'
  	});
});