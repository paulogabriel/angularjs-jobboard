app.controller('MainController', ['$scope', function($scope) {
	$scope.apps = [ 
		{ 
			vaga: 'UX Designer',
			cidade: 'Qualquer Lugar',
			tipo: 'Freelance'
		},
		{ 
			vaga: 'Desenvolvedor Front-end',
			cidade: 'Porto Alegre',	
			tipo: 'CLT'
		}
	]
}]);