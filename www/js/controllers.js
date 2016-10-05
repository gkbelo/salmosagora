angular.module('psalmstoday')

//_HomeController
.controller('HomeController', function($scope) {
})

//_PsalmGridController
.controller('PsalmGridController', function($scope, PsalmService) {
    PsalmService.lista().then(function(dados){
      $scope.psalms = dados;
    });

//    $scope.psalms = [
  //          { id: 1, verse: 001, text: "That man hath perfect blessedness who walketh not astray In counsel of ungodly men, nor stands in sinners' way, Nor sitteth in the scorner's chair:" }, 
    //        { id: 1, verse: 002, text: "But placeth his delight Upon GOD's law, and meditates on his law day and night."}
    //]
})

//_PsalmController
.controller('PsalmController', function($scope, PsalmService, $stateParams) {
    PsalmService.lista().then(function(dados){
      $scope.psalm = dados[$stateParams.psalmId];
    });
});