angular.module('psalmstoday')

//_HomeController
.controller('HomeController', function($scope, PsalmsService, $stateParams) {
    PsalmsService.dados().then(function(dados){
      $scope.psalm = dados.psalm[$stateParams.psalmId-1];
    });

    function getRandomAll(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    };
    $scope.v_random = getRandomAll(1, 150);
    
})

//_PsalmGridController
.controller('PsalmGridController', function($scope, PsalmsService) {
    PsalmsService.dados().then(function(dados){
      $scope.psalms = dados.psalm;
    });

    //slider_functions
    $scope.sliderIndexOptions = {
        loop: false,
        speed: 300,
        initialSlide: 0
      };

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      $scope.activeIndex = data.activeIndex;
      $scope.previousIndex = data.previousIndex;
    });    
})

//_PsalmController
.controller('PsalmController', function($scope, PsalmsService, $stateParams) {
    PsalmsService.dados().then(function(dados){
      $scope.psalm = dados.psalm[$stateParams.psalmId-1];
    });
    
    //slider_functions
    $scope.sliderOptions = {
        loop: false,
        speed: 300,
        effect: 'coverflow',
        initialSlide: 0
      };
    
    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
      // data.slider is the instance of Swiper
      $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      $scope.activeIndex = data.activeIndex;
      $scope.previousIndex = data.previousIndex;
    });
})
;