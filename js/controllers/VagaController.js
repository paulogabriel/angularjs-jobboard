app.controller('VagaController', ['$scope', 'vagas', '$routeParams', function($scope, vagas, $routeParams) {
	vagas.success(function(data) {
		$scope.detail = data[$routeParams.id];
	});
}]);