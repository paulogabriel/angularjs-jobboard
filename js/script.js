// App
var app = angular.module('jobboardApp', ['ngRoute']);

// Controllers
app.controller('HomeController', ['$scope', 'openings', function($scope, openings) {
  openings.success(function(data) {
    $scope.openings = data;
  });
}]);


app.controller('JobController', ['$scope', 'openings', '$routeParams', function($scope, openings, $routeParams) {
  openings.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);

// Services
app.service('openings', ['$http', function($http) {
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
  	.when('/post-job', {
    	controller: 'HomeController', // just to keep the pattern
    	templateUrl: 'post-job.html'
  	})
  	.when('/job/:id',{
    	controller: 'JobController',
    	templateUrl: 'views/opening.html'
  	})
  	.otherwise({
  		redirectTo: '/'
  	});
});