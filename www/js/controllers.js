angular.module('psalmstoday')

//_HomeController
.controller('HomeController', function($scope, PsalmsService, $stateParams, $ionicHistory) {
    PsalmsService.dados().then(function(dados){
      $scope.psalm = dados.psalm[$stateParams.psalmId-1];
    });

    function getRandomAll(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    };
    $scope.v_random = getRandomAll(1, 150);

    $scope.$on('$ionicView.enter', function() {
      $ionicHistory.clearHistory();
    });
})

//_PsalmGridController
.controller('PsalmGridController', function($scope, PsalmsService) {
    PsalmsService.dados().then(function(dados){
      $scope.psalms = dados.psalm;
    });

    //slider
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
.controller('PsalmController', function($scope, PsalmsService, $stateParams, $ionicPopup) {
    PsalmsService.dados().then(function(dados){
      $scope.psalm = dados.psalm[$stateParams.psalmId-1];
    });

    $scope.share = function() {
      navigator.screenshot.save((function(e, r) {
        window.plugins.socialsharing.share(null, null, 'file://' + r.filePath);
      }), 'jpg', 100, 'myPsalm');
    };

    function getRandomAll(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    };
    $scope.v_random = getRandomAll(1, 150);

    //slider
    $scope.sliderOptions = {
        loop: false,
        speed: 300,
        effect: 'coverflow',
        initialSlide: 0,
        pager: false, 
        direction: 'horizontal'
      };

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      $scope.activeIndex = data.activeIndex;
      $scope.previousIndex = data.previousIndex;
    });
})
;