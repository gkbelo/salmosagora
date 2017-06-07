angular.module('salmosagora')

//_HomeController
.controller('HomeController', function($scope, SalmosService, $stateParams, $ionicHistory) {
    SalmosService.dados().then(function(dados){
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
.controller('PsalmGridController', function($scope, SalmosService) {
    SalmosService.dados().then(function(dados){
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
.controller('PsalmController', function($scope, SalmosService, $stateParams, $ionicPopup) {
    SalmosService.dados().then(function(dados){
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

    $scope.sliderOptions = {
        loop: false,
        speed: 300,
        effect: 'coverflow',
        initialSlide: 0,
        pager: true,
        direction: 'horizontal'
      };

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      $scope.activeIndex = data.activeIndex;
      $scope.previousIndex = data.previousIndex;
    });
})

// profile 
.controller('ProfileController', function($scope, $stateParams) {

})
;