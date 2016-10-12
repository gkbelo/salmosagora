angular.module('psalmstoday')

//_HomeController
.controller('HomeController', function($scope) {
})

//_PsalmGridController
.controller('PsalmGridController', function($scope) {
})

//_PsalmController
.controller('PsalmController', function($scope, PsalmsService, $stateParams) {
    PsalmsService.dados().then(function(dados){
      $scope.psalm = dados.psalm[$stateParams.psalmId-1];
    });
    
    //slider_functions
    $scope.options = {
      loop: true,
      speed: 500
    }

    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
      $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
      console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      $scope.activeIndex = data.activeIndex;
      $scope.previousIndex = data.previousIndex;
    });
})
;