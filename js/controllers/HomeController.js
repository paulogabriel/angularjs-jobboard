app.controller('HomeController', ['$scope', 'vagas', function($scope, vagas) { 
	vagas.success(function(data) {
		$scope.vagas = data;
	});
}]);