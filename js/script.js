// App
var app = angular.module('vagasApp', []);

// Controller
// app.controller('MainController', ['$scope', 'apps', function($scope, apps) {
// 	apps.success(function(data) {
// 		$scope.apps = data;
// 	});
// }]);

// Controller
app.controller('MainController', function($scope,$http) {
	var url = "https://cdn.rawgit.com/paulogabriel/angularjs-jobboard/master/js/list2.json"
    $http.get(url).success(function (response) {
       $scope.apps = response;
    });
});

// Services
// app.service('apps', ['$http', function($http) {
//
//
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