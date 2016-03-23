// App
var app = angular.module('vagasApp', []);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
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

// Controller + Service
app.controller('HomeController', function($scope,$http) {
	var url = "http://paulogabriel.me/extranet/labs/angularjs-jobboard/js/list.json"
    $http.get(url).success(function (response) {
       $scope.vagas = response;
    });
});

app.controller('VagaController', ['$scope', 'vagas', '$routeParams', function($scope, vagas, $routeParams) {
  vagas.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);

// Controller
// app.controller('MainController', ['$scope', 'apps', function($scope, apps) {
// 	apps.success(function(data) {
// 		$scope.apps = data;
// 	});
// }]);

// Services
// app.service('apps', ['$http', function($http) {

// 	return $http({method: 'GET', url: 'https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json'}).success(function(data) {
// 	    $scope.apps = JSON.parse(data);
// 	    console.log($scope.apps);
// 	    $scope.message = "it works!";
// 	});
//
	// return $http.get('http://paulogabriel.me/extranet/labs/angularjs-jobboard/js/list.json')
	// .success(function(data) {
	// 	return data;
	// })
	// .error(function(data) {
	// 	return data;
	// });
//
// }]);

// Directives
// app.directive('appInfo', function() {
// 	return {
// 		restrict: 'E',
// 		// scope: {
// 			//   info: '='
// 			// },
// 			templateUrl: 'appInfo.html'
// 		};
// 	});