angular.module('psalmstoday')

//_HomeController
.controller('HomeController', function($scope) {
})

//_PsalmGridController
.controller('PsalmGridController', function($scope) {
})

//_PsalmController
.controller('PsalmController', function($scope, PsalmsService, $stateParams) {
    PsalmsService.lista().then(function(dados){
      $scope.psalm = dados.psalm[$stateParams.psalmId-1];
    });
});